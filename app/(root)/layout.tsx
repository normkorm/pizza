import { Header } from '@/shared/components/shared';
import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
};

export default function HomeLayout({
    children,
    modal,
}: Readonly<{
    children: ReactNode;
    modal: ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header />
            </Suspense>
            {children}
            {modal}
        </main>
    );
}
