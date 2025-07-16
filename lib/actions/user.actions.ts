'use server';
import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '../validators';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        await signIn('credentials', user);
        return { success: true, message: 'Signed in successfully' };
    } catch (error) {
        if (isRedirectError(error)) throw error;
    }
    return { success: false, massage: 'Invalid email or Password' };
}

export async function signOuthUser() {
    await signOut();
}
