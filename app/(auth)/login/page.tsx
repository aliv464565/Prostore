import { APP_NAME } from '@/lib/constanst';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CredentialsSignInForm from './credentials-signin-form';

const SiginInPage = async () => {
    const session = await auth();
    if (session) return redirect('/');
    return (
        <div className="w-full max-w-md mx-auto">
            <Card>
                <CardHeader className="space-y-4">
                    <Link href="/" className="flex-center">
                        <Image
                            src="/images/logo.svg"
                            width={100}
                            height={100}
                            alt={`${APP_NAME} logo`}
                            priority
                        />
                    </Link>
                    <CardTitle className="text-center">Sign In</CardTitle>
                    <CardDescription className="text-center">
                        Sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CredentialsSignInForm />
                </CardContent>
            </Card>
        </div>
    );
};

export default SiginInPage;
