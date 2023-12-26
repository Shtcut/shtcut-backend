import { HttpService } from '@nestjs/axios';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import lang from 'apps/sht-gw/lang';
import { NextFunction, Request, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { AppException } from 'shtcut/core';

@Injectable()
export class ApiMiddleware implements NestMiddleware {
  constructor(
    private http: HttpService,
    private config: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // check header or url parameters or post parameters for token
    const apiVersions = this.config.get('app.api.versions') as string[];
    const currentVersion = `/api/${apiVersions.pop()}`;
    const excludeUrls = [`/${currentVersion}/ping`, `/${currentVersion}/graphql`];
    if (excludeUrls.includes(req.originalUrl)) {
      return next();
    }
    const apiKey = req.query.apiKey || req.headers['x-api-key'];
    if (!apiKey) {
      return next(AppException.UNAUTHORIZED(lang.get('error').noApiKey));
    }
    if (apiKey === process.env.API_KEY) {
      return next();
    }
    const { data } = await lastValueFrom(
      this.http.get(`${process.env.AUTH_SERVICE}/auth/swap-for-token`, {
        headers: req.headers,
      }),
    );
    if (data.token === null) {
      return next(AppException.UNAUTHORIZED(lang.get('error').invalidApiKey));
    }
    if (data.token) {
      req.header['x-access-token'] = data.token;
      req.header['x-api-key'] = process.env.API_KEY;
    }
    return next();
  }
}
