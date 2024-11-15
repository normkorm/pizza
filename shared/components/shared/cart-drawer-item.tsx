import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import * as CartItem from './cart-item-details';
import { CartItemProps } from '@/shared/components/shared/cart-item-details/cart-item-details.types';
import { CountButton } from '@/shared/components/shared/count-button';
import { TrashIcon } from 'lucide-react';

interface Props extends CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
    className?: string;
}

export const CartDrawerItem: FC<Props> = ({
    onClickCountButton,
    imageUrl,
    name,
    price,
    details,
    quantity,
    className,
    onClickRemove,
    disabled,
}) => {
    return (
        <div
            className={cn(
                'flex bg-white p-5 gap-6',
                { 'opacity-50 pointer-events-none': disabled },
                className
            )}
        >
            <CartItem.Image src={imageUrl} />

            <div className="flex-1">
                <CartItem.Info name={name} details={details} />

                <hr className="my-3" />

                <div className="flex items-center justify-between">
                    <CountButton
                        onClick={onClickCountButton}
                        value={quantity}
                    />
                    <div className="flex items-center gap-3">
                        <CartItem.Price value={price} />
                        <TrashIcon
                            className="cursor-pointer text-gray-400 hover:text-gray-600"
                            size={16}
                            onClick={onClickRemove}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawerItem;
