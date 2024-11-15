'use client';

import { FC } from 'react';
import { Ingredient, ProductItem } from '@prisma/client';
import { Button } from '@/shared/components/ui';
import { cn } from '@/shared/lib/utils';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import {
    GroupVariants,
    IngredientItem,
    PizzaImage,
    Title,
} from '@/shared/components/shared';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks/use-pizza-options';

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    className?: string;
    loading?: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: FC<Props> = ({
    name,
    imageUrl,
    items,
    ingredients,
    onSubmit,
    className,
    loading,
}) => {
    const {
        size,
        type,
        selectedIngredients,
        availableSizes,
        setSize,
        setType,
        addIngredient,
        currentItemId,
    } = usePizzaOptions(items);

    const { totalPrice, textDetails } = getPizzaDetails(
        type,
        ingredients,
        items,
        size,
        selectedIngredients
    );

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngredients));
        }
        console.log({
            size,
            type,
            ingredients: selectedIngredients,
        });
    };

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage imageUrl={imageUrl} size={size} />
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="mb-1 font-extrabold" />
                <p className="text-gray-400">{textDetails}</p>
                <div className="mt-5 flex flex-col gap-4">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onclick={() => addIngredient(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleClickAdd}
                    loading={loading}
                    className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
                >
                    Добавить в корзину за {totalPrice} тг
                </Button>
            </div>
        </div>
    );
};
