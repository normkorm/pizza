import { FC } from 'react';
import {
    ErrorText,
    FormTextarea,
    WhiteBlock,
} from '@/shared/components/shared';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressInput } from '@/shared/components/shared/address-input';

interface Props {
    className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
    const { control } = useFormContext();
    return (
        <WhiteBlock className={className} title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
                <Controller
                    control={control}
                    render={({ field, fieldState }) => (
                        <>
                            <AddressInput onChange={field.onChange} />
                            {fieldState.error?.message && (
                                <ErrorText text={fieldState.error.message} />
                            )}
                        </>
                    )}
                    name="address"
                />
                <FormTextarea
                    name="comment"
                    rows={5}
                    className="text-base"
                    placeholder="Комментарии к заказу"
                />
            </div>
        </WhiteBlock>
    );
};
