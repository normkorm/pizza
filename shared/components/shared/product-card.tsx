import { Title } from '@/shared/components/shared/title';
import { Button } from '@/shared/components/ui';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import { Ingredient } from '@prisma/client';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
    ingredients: Ingredient[];
}

export const ProductCard: FC<Props> = ({
    className,
    id,
    price,
    imageUrl,
    name,
    ingredients,
}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="bg-secondary flex h-[260px] justify-center rounded-lg p-6">
                    <img className="size-[215px]" src={imageUrl} alt={name} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    {ingredients
                        .map((ingredient) => ingredient.name)
                        .join(', ')}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-[20px]">
                        от <b>{price} тг.</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
