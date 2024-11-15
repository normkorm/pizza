import { Ingredient, ProductItem } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { calcTotalPizzaPrice } from '@/shared/lib/calc-total-pizza-price';

export const getPizzaDetails = (
    type: PizzaType,
    ingredients: Ingredient[],
    items: ProductItem[],
    size: PizzaSize,
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(
        type,
        ingredients,
        items,
        size,
        selectedIngredients
    );
    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

    return { textDetails, totalPrice };
};
