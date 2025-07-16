import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../assets/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { SERVER_URL } from '@/lib/constanst';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: { template: `%s | Prostore`, default: 'Prostore' },
    description: 'A modern ecommerce platform built with Next.js',
    metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={` ${inter.className} antialiased`}>
                <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
