import NextAuth, { NextAuthConfig } from 'next-auth';
import { prisma } from './db/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
export const authOption = {
    pages: { signIn: '/sign-in', error: '/sing-in' },
    session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                if (credentials === null) return null;
                const user = await prisma.user.findFirst({
                    where: { email: credentials.email as string },
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {
            session.user.id = token.sub;
            if (trigger === 'update') session.user.name = user.name;
            return session;
        },
    },
} satisfies NextAuthConfig;
export const { handlers, signIn, signOut, auth } = NextAuth(authOption);
