'use client';

import { CartButton, ProfileButton, SearchInput } from '@/shared/components/';
import { Container } from '@/shared/components/shared/container';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthModal } from '@/shared/components/shared/modals/auth-modal/auth-modal';

interface Props {
    className?: string;
    hasSearch?: boolean;
    hasCart?: boolean;
}

export const Header: FC<Props> = ({
    className,
    hasSearch = true,
    hasCart = true,
}) => {
    const router = useRouter();
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const searchParams = useSearchParams();
    useEffect(() => {
        let toastMessage = '';

        if (searchParams.has('paid')) {
            toastMessage =
                'Заказ успешно оплачен! Информация отправлена на почту.';
        }

        if (searchParams.has('verified')) {
            toastMessage = 'Почта успешно подтверждена!';
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace('/');
                toast.success(toastMessage, {
                    duration: 3000,
                });
            }, 1000);
        }
    }, []);
    return (
        <header className={cn('border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <div>
                            <h1 className="text-2xl font-black uppercase">
                                Next Pizza
                            </h1>
                            <p className="text-sm leading-3 text-gray-400">
                                вкусней уже некуда
                            </p>
                        </div>
                    </div>
                </Link>

                {hasSearch && (
                    <div className="mx-10 flex-1">
                        <SearchInput />
                    </div>
                )}

                <div className="flex items-center gap-3">
                    <AuthModal
                        open={openAuthModal}
                        onClose={() => setOpenAuthModal(false)}
                    />
                    <ProfileButton
                        onClickSignIn={() => setOpenAuthModal(true)}
                    />
                    {hasCart && <CartButton />}
                </div>
            </Container>
        </header>
    );
};
