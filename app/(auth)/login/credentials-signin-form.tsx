'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithCredentials } from '@/lib/actions/user.actions';

import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: '',
    });

    const { pending } = useFormStatus();
    console.log(pending, data, action, 'ddddddddddddd');
    return (
        <form action={action}>
            <div className="space-y-6">
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="password"
                    />
                </div>
                <Button disabled={pending} className="w-full" variant="default">
                    {pending ? 'Signing In...' : 'Sign In'}
                </Button>
                {data && !data.success && (
                    <div className="text-center text-destructive">{data.massage}</div>
                )}
                <div className="text-sm text-center text-muted-foreground">
                    Don&apos;t have an account?
                    <Link href="/sign-up " target="_self" className="Link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default CredentialsSignInForm;
