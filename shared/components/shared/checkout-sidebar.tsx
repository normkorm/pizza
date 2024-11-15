import {
    CheckoutItemDetails,
    WhiteBlock,
} from '@/shared/components/shared/index';
import { FC } from 'react';
import { Button, Skeleton } from '@/shared/components/ui';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    totalAmount: number;
    loading?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 1000;

export const CheckoutSidebar: FC<Props> = ({
    totalAmount,
    loading,
    className,
}) => {
    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
    return (
        <WhiteBlock className={cn(className, 'sticky top-4 p-6')}>
            <div className="flex flex-col gap-1">
                <span className="text-xl">Итого:</span>
                {!loading ? (
                    <span className="text-4xl font-extrabold">
                        {totalPrice} тг
                    </span>
                ) : (
                    <Skeleton className="h-10 w-48" />
                )}
            </div>

            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Package size={18} className="mr-2 text-gray-300" />
                        Стоимость товаров:
                    </div>
                }
                value={
                    !loading ? (
                        `${totalAmount} тг`
                    ) : (
                        <Skeleton className="h-6 w-16 rounded-[6px]" />
                    )
                }
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Percent size={18} className="mr-2 text-gray-300" />
                        Налоги:
                    </div>
                }
                value={
                    !loading ? (
                        `${vatPrice} тг`
                    ) : (
                        <Skeleton className="h-6 w-16 rounded-[6px]" />
                    )
                }
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Truck size={18} className="mr-2 text-gray-300" />
                        Доставка:
                    </div>
                }
                value={
                    !loading ? (
                        `${DELIVERY_PRICE} тг`
                    ) : (
                        <Skeleton className="h-6 w-16 rounded-[6px]" />
                    )
                }
            />

            <Button
                type="submit"
                className="mt-6 h-14 w-full rounded-2xl text-base font-bold"
                loading={loading}
            >
                Перейти к оплате
                <ArrowRight className="ml-2 w-5" />
            </Button>
        </WhiteBlock>
    );
};
