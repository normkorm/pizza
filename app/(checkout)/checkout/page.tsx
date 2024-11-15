'use client';

import {
    CheckoutAddressForm,
    CheckoutCart,
    checkoutFormSchema,
    CheckoutPersonalForm,
    CheckoutSidebar,
    Container,
    Title,
} from '@/shared/components/';
import { useCart } from '@/shared/hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutFormValues } from '@/shared/components/shared/checkout/checkout-form-schema';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function CheckoutPage() {
    const [submitting, setSubmitting] = useState(false);
    const {
        totalAmount,
        items,
        removeCartItem,
        handleClickCountButton,
        loading,
    } = useCart();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        },
    });

    const grayBackground = loading ? 'pointer-events-none opacity-40' : '';

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            setSubmitting(true);
            const url = await createOrder(data);

            toast.success('Заказ успешно создан! 📝 Переход на оплату...', {
                icon: '✅',
            });

            if (url) {
                location.href = url;
            }
        } catch (e) {
            console.error(e);
            setSubmitting(false);
            toast.error('Не удаось создать заказ', {
                icon: '❌',
            });
        }
    };

    return (
        <Container className="mt-10">
            <Title
                size="lg"
                className="mb-8 font-extrabold"
                text="Оформление заказа"
            />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="mb-20 flex flex-1 flex-col gap-10">
                            <CheckoutCart
                                items={items}
                                onClickCountButton={handleClickCountButton}
                                removeCartItem={removeCartItem}
                                className={grayBackground}
                                loading={loading}
                            />
                            <CheckoutPersonalForm className={grayBackground} />
                            <CheckoutAddressForm className={grayBackground} />
                        </div>
                        <div className="w-[450px]">
                            <CheckoutSidebar
                                totalAmount={totalAmount}
                                loading={loading || submitting}
                                className={grayBackground}
                            />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
