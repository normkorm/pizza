'use client';

import { cn } from '@/shared/lib/utils';
import { useStore } from '@/shared/store/category';
import type { FC } from 'react';
import { Category } from '@prisma/client';

interface Props {
    items: Category[];
    className?: string;
}

// const cats = [
//     { id: 1, name: "Пиццы" },
//     { id: 2, name: "Комбо" },
//     { id: 3, name: "Закуски" },
//     { id: 4, name: "Завтрак" },
//     { id: 5, name: "Коктейли" },
//     { id: 6, name: "Кофе" },
//     { id: 7, name: "Напитки" },
//     { id: 8, name: "Десерты" },
// ];
export const Categories: FC<Props> = ({ items, className }) => {
    const { activeID } = useStore();
    return (
        <div
            className={cn(
                'inline-flex gap-1 rounded-2xl bg-gray-50 p-1',
                className
            )}
        >
            {items.map(({ name, id }, index) => (
                <a
                    className={cn(
                        'flex h-11 items-center rounded-2xl px-5 font-bold',
                        activeID === id &&
                            'bg-white text-primary shadow-md shadow-gray-200'
                    )}
                    key={index}
                    href={`/#${name}`}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
