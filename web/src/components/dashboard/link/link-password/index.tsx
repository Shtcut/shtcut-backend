import React, { useState } from 'react';
import { FormControl, FormField, FormItem, FormMessage, Form } from '@shtcut-ui/react';
import { Lock } from 'lucide-react';
import Image from 'next/image';
import { PasswordInput } from '@shtcut/components/_shared';
import { useForm } from 'react-hook-form';
import { useLink } from '@shtcut/hooks/link';
import { LoadingButton } from '@shtcut/components/_shared/loading-button';

const LinkPasswordComponent = ({ aliasQuery }: { aliasQuery: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { submitPassword } = useLink({ callLinks: true });
    const form = useForm({
        defaultValues: {
            password: ''
        },
        mode: 'onSubmit'
    });

    const handleFormSubmit = async (value: { password: string }) => {
        setIsLoading(true);
        const password = value.password;
        try {
            const response = await submitPassword({ alias: aliasQuery, password }).unwrap();
        } catch (error) {
            console.error('Error submitting password:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <section className="flex items-center justify-center flex-col w-full gap-y-5">
                <section className="mb-6">
                    <Image src={'/logos/shtcut-logo.png'} width={110} height={30} alt="shtcut-logo" />
                </section>
                <section
                    className="bg-primary-0 w-36 h-36 rounded-full
                 flex justify-center text-white items-center"
                >
                    <Lock size={64} />
                </section>
                <section className="flex flex-col items-center w-full sm:w-80 mx-auto">
                    <h1 className="font-bold">Password Required</h1>
                    <p className="text-sm text-center text-[#5A5555]">
                        This link is password protected. Please enter the password to view it.
                    </p>
                </section>
                <section className="w-1/3 flex flex-col gap-y-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                            <FormField
                                control={form.control}
                                name="password"
                                rules={{
                                    required: 'Password is required'
                                }}
                                render={({ field, fieldState }) => (
                                    <FormItem className="space-y-1 w-full">
                                        <FormControl>
                                            <PasswordInput
                                                placeholder="Enter password"
                                                {...field}
                                                isInvalid={!!fieldState.error}
                                            />
                                        </FormControl>
                                        <FormMessage>{fieldState.error?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <LoadingButton
                                className="w-full mt-6 text-[13px] bg-primary-0"
                                loading={isLoading}
                                type="submit"
                            >
                                Submit
                            </LoadingButton>
                        </form>
                    </Form>
                </section>
            </section>
        </div>
    );
};

export default LinkPasswordComponent;
