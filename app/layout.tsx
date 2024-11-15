import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from '@/shared/components/shared/providers';

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link data-rh="true" rel="icon" href="/logo.png" />
                <title></title>
            </head>
            <body className={nunito.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
