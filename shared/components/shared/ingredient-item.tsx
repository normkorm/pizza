import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onclick?: () => void;
    className?: string;
}

export const IngredientItem: FC<Props> = ({
    imageUrl,
    name,
    price,
    active,
    onclick,
    className,
}) => {
    return (
        <div
            className={cn(
                'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
                { 'border border-primary': active },
                className
            )}
            onClick={onclick}
        >
            {active && (
                <CircleCheck className="text-primary absolute right-2 top-2" />
            )}
            <img width={110} height={110} src={imageUrl} alt={name} />
            <span className="mb-1 text-xs">{name}</span>
            <span className="font-bold">{price}тг</span>
        </div>
    );
};
