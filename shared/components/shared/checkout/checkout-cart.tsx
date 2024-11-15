import { FC } from 'react';
import { CheckoutItem, WhiteBlock } from '@/shared/components/shared';
import { getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { CartStateItem } from '@/shared/lib/get-cart-details';

interface Props {
    className?: string;
    items: CartStateItem[];
    onClickCountButton: (
        id: number,
        quantity: number,
        type: 'plus' | 'minus'
    ) => void;
    removeCartItem: (id: number) => void;
    loading?: boolean;
}

export const CheckoutCart: FC<Props> = ({
    className,
    items,
    onClickCountButton,
    removeCartItem,
}) => {
    return (
        <WhiteBlock className={className} title="1. Корзина">
            <div className="flex flex-col gap-5">
                {items.map((item) => (
                    <CheckoutItem
                        key={item.id}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        details={getCartItemDetails(
                            item.ingredients,
                            item.pizzaType as PizzaType,
                            item.pizzaSize as PizzaSize
                        )}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onClickCountButton={(type) =>
                            onClickCountButton(item.id, item.quantity, type)
                        }
                        onClickRemove={() => removeCartItem(item.id)}
                        disabled={item.disabled}
                    />
                ))}
            </div>
        </WhiteBlock>
    );
};
