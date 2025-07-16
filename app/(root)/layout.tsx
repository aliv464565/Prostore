import '@/assets/styles/globals.css';
import Footer from '@/components/footer';
import Header from '@/components/shared/header';
import { SERVER_URL } from '@/lib/constanst';
import { Metadata } from 'next';

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
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 wrapper">{children}</main>
            <Footer />
        </div>
    );
}
