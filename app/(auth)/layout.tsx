import '@/assets/styles/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex items-center min-h-screen w-full h-full">{children}</div>;
}
