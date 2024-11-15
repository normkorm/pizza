'use client';

import { Title } from '@/shared/components/shared/title';
import { cn } from '@/shared/lib/utils';
import { useStore } from '@/shared/store/category';
import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { ProductWithRelations } from '@/@types/prisma';
import { ProductCard } from '@/shared/components/shared/product-card';

interface Props {
    title: string;
    items: ProductWithRelations[];
    className?: string;
    categoryId: number;
    listClassName?: string;
}

export const ProductsGroupList: FC<Props> = ({
    title,
    items,
    className,
    listClassName,
    categoryId,
}) => {
    const { setActiveID } = useStore();
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveID(categoryId);
        }
    }, [intersection?.isIntersecting, title, setActiveID, categoryId]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="mb-5 font-extrabold" />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                        ingredients={product.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};
