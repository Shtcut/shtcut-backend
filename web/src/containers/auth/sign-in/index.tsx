/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Card, Dict, ToastAction, toast } from '@shtcut-ui/react';
import { AppAlert, Logo } from '@shtcut/components';
import { SignInForm } from '@shtcut/components/form';
import { useAuth } from '@shtcut/hooks/auth';
import { IconAlertCircle } from '@tabler/icons-react';
import { get } from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const SignInContainer = () => {
    const { push } = useRouter();
    const { signIn, authData, signInResponse } = useAuth();
    const { isSuccess: isLoginSuccess, isLoading, error } = signInResponse;

    const errorMessage = get(error, ['data', 'meta', 'error', 'message'], 'An error occurred, please try again.');

    const isVerifiedEmail = authData?.verifications?.['email'];

    const handleSignInSubmit = (payload: Dict) => {
        signIn({
            payload,
            options: { noSuccessMessage: true }
        });
    };

    const ErrorAlert = ({ message }: { message: string }) => (
        <AppAlert
            variant="destructive"
            className="mx-auto mb-3 items-center"
            description={message}
            icon={<IconAlertCircle />}
        />
    );

    if (error && errorMessage) {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: errorMessage,
            action: <ToastAction altText="Try again">Try again</ToastAction>
        });
    }

    useEffect(() => {
        if (isLoginSuccess) {
            if (!isVerifiedEmail) {
                push(`/auth/verify-email`);
            } else {
                // todo trigger current logged in user
                push(`/welcome`);
            }
        }
    }, [isLoginSuccess, isVerifiedEmail]);

    return (
        <Card className="p-6">
            <div className="mb-4 flex items-center justify-center">
                <Logo />
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 border-bpx-4 py-6 pt-8 text-center sm:px-16">
                <h1 className="text-2xl flex items-center justify-center font-semibold tracking-tight">Sign in</h1>
                <p className="text-sm w-52 mb-10 space-x-2 justify-center text-muted-foreground">
                    Welcome back! Sign in to get started with SHTCUT
                </p>
            </div>
            <div className="mt-2">{error && errorMessage && <ErrorAlert message={errorMessage} />}</div>
            <SignInForm handleLoginSubmit={handleSignInSubmit} isLoading={isLoading} error={error} />
        </Card>
    );
};
