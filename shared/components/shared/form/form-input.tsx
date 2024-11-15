'use client';

import { FC, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/components/ui';
import { ErrorText, RequiredSymbol } from '@/shared/components/shared';
import { mergeRefs } from '@/shared/constants/merge-refs';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
    maskRef?: any;
}

export const FormInput: FC<Props> = ({
    className,
    name,
    label,
    required,
    maskRef,
    ...props
}) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        setValue(name, '');
    };

    const { ref: hookFormRef, ...registerAmountRest } = register(name);

    return (
        <div className={className}>
            {label && (
                <p className="mb-2 font-medium">
                    {label} {required && <RequiredSymbol />}
                </p>
            )}

            <div className="relative">
                <Input
                    ref={
                        maskRef ? mergeRefs(maskRef, hookFormRef) : hookFormRef
                    }
                    className="text-md h-12"
                    {...registerAmountRest}
                    {...props}
                />
                {/*{value && <ClearButton onClick={onClickClear} />}*/}
            </div>

            {errorText && <ErrorText text={errorText} className="mt-2" />}
        </div>
    );
};
