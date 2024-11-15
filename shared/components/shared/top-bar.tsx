import { Categories } from '@/shared/components/shared/categories';
import { Container } from '@/shared/components/shared/container';
import { SortPopup } from '@/shared/components/shared/sort-popup';
import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';
import { Category } from '@prisma/client';

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: FC<Props> = ({ categories, className }) => {
    return (
        <div
            className={cn(
                'sticky top-0 z-10 bg-white py-4 shadow-lg shadow-black/5',
                className
            )}
        >
            <Container className="flex items-center justify-between">
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    );
};
