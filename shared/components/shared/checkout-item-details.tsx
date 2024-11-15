import { cn } from '@/shared/lib/utils';
import { FC, ReactNode } from 'react';

interface Props {
    title?: ReactNode;
    value?: ReactNode;
    className?: string;
}

export const CheckoutItemDetails: FC<Props> = ({ title, value, className }) => {
    return (
        <div className={cn('flex my-4', className)}>
            <span className="flex flex-1 text-lg text-neutral-500">
                {title}
                <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
            </span>

            <span className="text-lg font-bold">{value}</span>
        </div>
    );
};
