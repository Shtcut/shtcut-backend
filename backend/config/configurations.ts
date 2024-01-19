import * as process from 'process';

export const configuration = () => ({
  app: {
    appName: process.env.APP_NAME || 'ShtCut',
    baseUrl: process.env.BASE_URL || `http//:localhost:${Number(process.env.PORT || 7000)}`,
    apiKey: process.env.API_KEY || 'ShtCutKey',
    serviceName: process.env.SERVICE_NAME || 'service',
    environment: process.env.NODE_ENV || 'development',
    encryptionKey: process.env.SERVER_SECRET || 'AppSecret',
    port: process.env.PORT || 7000,
    pagination: {
      itemsPerPage: 10,
    },
    lang: 'en',
    jwtExpiry: process.env.JWT_EXPIRY || '30000m',
    showDeveloperError: process.env.SHOW_DEVELOPER_ERROR || true,
    fromEmail: process.env.EMAIL_NO_REPLY || 'noreply@shtcut.link',
    errorReportEmail: process.env.ERROR_REPORT_EMAIL || 'bug@shtcut.link',
    defaultVerifyCode: '123456',
    messageBroker: process.env.MESSAGE_BROKER || 'redis',
    rabbitMQ: process.env.RABBIT_MQ_URL || 'amp://localhost:5672',
    redis: {
      url: process.env.REDIS_URL,
      host: process.env.REDIS_SERVER_HOST_URL,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    },
    api: {
      versions: ['v1'],
    },
    mongodb: {
      url: process.env.DB_URL,
    },
    templates: {
      email: {
        welcome: 'welcome',
        verify: 'verify',
        passwordReset: 'password-reset',
        otp: 'otp',
        error: 'error',
      },
      sms: {
        verify: 'verify',
      },
    },
    social: {
      facebook: {
        url: 'https://graph.facebook.com/v2.12/me?fields=email,first_name,last_name,picture',
        apiKey: process.env.FACEBOOK_CLIENT_ID,
        testAccessToken: process.env.FB_ACCESS_TOKEN,
        testEmail: process.env.FB_TEST_EMAIL,
        testSocialID: process.env.FB_TEST_ID,
      },
      google: {
        url: 'https://www.googleapis.com/oauth2/v1/tokeninfo',
        userInfoUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
        secret: process.env.GOOGLE_SECRET_ID,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        testEmail: process.env.GOOGLE_TEST_EMAIL,
        testSocialId: process.env.GOOGLE_TEST_ID,
      },
    },
    data: {
      permissionValueType: ['boolean', 'list', 'number'],
    },
    redisUrl: process.env.REDIS_SERVER_HOST_URL,
    ipregistry: {
      apiKey: process.env.IPREGISTRY_API_KEY,
    },
    fileUpload: {
      default: process.env.GOOGLE_CLOUD_PROJECT_ID || 's3',
      gcs: {
        projectID: process.env.GOOGLE_CLOUD_PROJECT_ID,
        keyFile: process.env.GOOGLE_CLOUD_KEY_FILE,
        bucket: process.env.GOOGLE_CLOUD_STORAGE_BUCKET,
      },
      s3: {
        key: process.env.AWS_ACCESS_KEY,
        secret: process.env.ASW_SECRET_KEY,
        bucket: process.env.AWS_BUCKET,
        region: process.env.AWS_REGION,
      },
    },
    termii: {
      url: process.env.TERMI_API_URL,
      apiKey: process.env.TERMI_API_KEY,
      secretKey: process.env.TERMI_SECRET_KEY,
      senderId: process.env.TERMI_SENDER_ID,
    },
    permissionValuesTypes: ['boolean', 'list', 'number', 'text'],
  },
  worker: {
    fileUpload: {
      default: process.env.GOOGLE_CLOUD_PROJECT_ID || 's3',
      gcs: {
        projectID: process.env.GOOGLE_CLOUD_PROJECT_ID,
        keyFile: process.env.GOOGLE_CLOUD_KEY_FILE,
        bucket: process.env.GOOGLE_CLOUD_STORAGE_BUCKET,
      },
      s3: {
        key: process.env.AWS_ACCESS_KEY,
        secret: process.env.ASW_SECRET_KEY,
        bucket: process.env.AWS_BUCKET,
        region: process.env.AWS_REGION,
      },
    },
    email: {
      noReply: { email: process.env.NO_REPLY || 'no-reply@shtcut.link', name: process.env.APP_NAME || 'ShtCut' },
      mailOption: process.env.MAIL_OPTION || 'sendgrid',
      sendgrid: {
        fromEmail: process.env.NO_REPLY || 'no-reply@shtcut.link',
        apiKey: process.env.SENDGRID_API_KEY,
        contactForRecipient: process.env.CONTACT_FORM_EMAIL_RECIPIENT,
      },
      postmark: {
        username: process.env.POSTMARK_USERNAME || 'John Doe',
        fromEmail: process.env.NO_REPLY || 'no-reply@shtcut.link',
        url: process.env.POSTMARK_URL || '',
        apiKey: process.env.POSTMARK_API_KEY,
      },
    },
  },
  microServices: {
    app: {
      url: process.env.SHTCUT_APP_SERVICE_HOST || 'http://localhost:4002/api/v1',
    },
    admin: {
      url: process.env.SHTCUT_APP_WORKER_HOST || 'http://localhost:4007/api/v1',
    },
    worker: {
      url: process.env.SHTCUT_APP_WORKER_HOST || 'http://localhost:4003/api/v1',
    },
  },
});
