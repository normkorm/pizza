'use client';

import { FC } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/shared/components/ui';
import { cn } from '@/shared/lib/utils';
import { className } from 'postcss-selector-parser';
import { CartDrawer } from '@/shared/components/shared/cart-drawer';
import { useCartStore } from '@/shared/store';

interface Props {
    className?: string;
}

export const CartButton: FC<Props> = () => {
    const { totalAmount, loading, items } = useCartStore((state) => state);

    return (
        <CartDrawer>
            <Button
                disabled={loading}
                loading={loading}
                className={cn(
                    'group relative',
                    { 'w-[105px]': loading },
                    className
                )}
            >
                <b>{totalAmount} тг</b>
                <span className="mx-3 h-full w-px bg-white/30" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart
                        size={16}
                        className="relative"
                        strokeWidth={2}
                    />
                    <b>{items.length}</b>
                </div>
                <ArrowRight
                    size={20}
                    className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
            </Button>
        </CartDrawer>
    );
};
