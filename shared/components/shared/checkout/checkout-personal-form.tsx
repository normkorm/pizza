'use client';

import { FC } from 'react';
import { FormInput, WhiteBlock } from '@/shared/components/shared';
import { useIMask } from 'react-imask';

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: FC<Props> = ({ className }) => {
    const { ref: maskRef } = useIMask<HTMLInputElement>({
        mask: '+7(000)-000-00-00',
    });
    return (
        <WhiteBlock className={className} title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
                <FormInput
                    name="firstName"
                    className="text-base"
                    placeholder="Имя"
                />
                <FormInput
                    name="lastName"
                    className="text-base"
                    placeholder="Фамилия"
                />
                <FormInput
                    name="email"
                    className="text-base"
                    placeholder="E-mail"
                />
                <FormInput
                    name="phone"
                    className="text-base"
                    placeholder="Телефон"
                    maskRef={maskRef}
                />
            </div>
        </WhiteBlock>
    );
};
