import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import type { FC } from 'react';

interface Props {
    className?: string;
}

export const SortPopup: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5',
                className
            )}
        >
            <ArrowUpDown size={16} />
            <b>Сортировка:</b>
            <b className="text-primary">популярное</b>
        </div>
    );
};
