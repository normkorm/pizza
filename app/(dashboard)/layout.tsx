import { ReactNode } from 'react';

export const metadata = {
    title: 'dashboard',
    description: 'this is a dashboard',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
