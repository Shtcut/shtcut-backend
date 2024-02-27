'use client';

import { Button } from '@shtcut-ui/react';
import { HTMLProps } from 'react';
import { Spinner } from '../Spinner';


type AppButtonVariant = 'default' | 'secondary' | 'destructive' | 'link' | 'outline' | 'ghost';

interface AppButtonProps extends HTMLProps<HTMLButtonElement> {
    loading?: boolean;
    loadingLabel?: string;
    variant?: AppButtonVariant;
    htmlType?: HTMLProps<HTMLButtonElement>['type'];
    bgColor?: string;
}

export const AppButton = (props: AppButtonProps) => {
    const { className, children, loading, type, htmlType = 'button', variant, bgColor, loadingLabel, onClick, ...rest } = props;

    return (
        <Button
        type={htmlType as any}
            variant={variant}
            className={` ${
                className
                    ? `${className} w-full `
                    : `${
                          rest.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                      } flex items-center justify-center gap-x-4 font-semibold rounded-lg w-full md:text-lg text-sm px-5 h-11 text-center mr-2`
            }`}
            onClick={onClick}
        >
            {loading ? (
                <div className="flex items-center justify-center">
                    <Spinner color={'fill-white'} height={'h-4'} width={'h-4'} label={loadingLabel} />
                </div>
            ) : (
                <> {children}</>
            )}
        </Button>
    );
};