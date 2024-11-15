import { useCartStore } from '@/shared/store';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';
import { CartStateItem } from '@/shared/lib/get-cart-details';
import { useEffect } from 'react';

type ReturnProps = {
    totalAmount: number;
    items: CartStateItem[];
    loading: boolean;
    removeCartItem: (id: number) => void;
    addCartItem: (values: CreateCartItemValues) => void;
    handleClickCountButton: (
        id: number,
        quantity: number,
        type: 'plus' | 'minus'
    ) => void;
};

export const useCart = (): ReturnProps => {
    const cartState = useCartStore((state) => state);

    const handleClickCountButton = (
        id: number,
        quantity: number,
        type: 'plus' | 'minus'
    ) => {
        const new_quantity = type === 'plus' ? quantity + 1 : quantity - 1;
        cartState.updateItemQuantity(id, new_quantity);
    };

    useEffect(() => {
        cartState.fetchCartItems();
    }, []);

    return { ...cartState, handleClickCountButton };
};
