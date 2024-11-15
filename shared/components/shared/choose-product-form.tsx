import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/components/shared/title';
import { Button } from '@/shared/components/ui';

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    onSubmit?: VoidFunction;
    className?: string;
    loading?: boolean;
}

export const ChooseProductForm: FC<Props> = ({
    name,
    imageUrl,
    price,
    onSubmit,
    className,
    loading,
}) => {
    return (
        <div className={cn('flex flex-1', className)}>
            <div className="relative flex w-full flex-1 items-center justify-center">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 z-10 size-[350px] transition-all duration-300"
                />
            </div>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="mb-1 font-extrabold" />
                <Button
                    onClick={() => onSubmit?.()}
                    loading={loading}
                    className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
                >
                    Добавить в корзину за {price} тг
                </Button>
            </div>
        </div>
    );
};
