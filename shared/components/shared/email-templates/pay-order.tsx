import { FC } from 'react';

interface Props {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export const PayOrderTemplate: FC<Readonly<Props>> = ({
    orderId,
    totalAmount,
    paymentUrl,
}) => (
    <div>
        <h1>Заказ #{orderId}</h1>

        <p>
            Оплатите заказ на сумму {totalAmount} тг. Перейдите{' '}
            <a href={paymentUrl}> по этой ссылке</a> для оплаты заказа
        </p>
    </div>
);
