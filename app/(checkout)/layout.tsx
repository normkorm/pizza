import { ReactNode, Suspense } from 'react';
import { Container, Header } from '@/shared/components/shared';

export const metadata = {
    title: 'Козина',
    description: 'Козна',
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen bg-[#F4F1EE]">
            <Container>
                <Suspense>
                    <Header
                        className="border-gray-200"
                        hasSearch={false}
                        hasCart={false}
                    />
                </Suspense>
                {children}
            </Container>
        </main>
    );
}
