import React, { FC } from 'react';
import { CartItemDto } from '@/shared/services/dto/cart.dto';

interface Props {
    orderId: number;
    items: CartItemDto[];
}
export const OrderSuccessTemplate: FC<Props> = ({ orderId, items }) => (
    <div>
        <h1>Спасибо за покупку! 🎉</h1>

        <p>Ваш заказ #{orderId} оплачен. Список товаров:</p>

        <hr />

        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.productItem.product.name} | {item.productItem.price}{' '}
                    тг x {item.quantity} шт. ={' '}
                    {item.productItem.price * item.quantity} ₽
                </li>
            ))}
        </ul>
    </div>
);
