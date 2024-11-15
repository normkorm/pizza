import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

/**
 * функция для подсчета стоймости пиццы
 * @param type тип теста выбранной пиццы
 * @param ingredients список вариации
 * @param items список ингредиентов
 * @param size размер пиццы
 * @param selectedIngredients выбранные игредиенты
 */

export const calcTotalPizzaPrice = (
    type: PizzaType,
    ingredients: Ingredient[],
    items: ProductItem[],
    size: PizzaSize,
    selectedIngredients: Set<number>
) => {
    const pizzaPrice =
        items.find((item) => item.pizzaType === type && item.size === size)
            ?.price || 0;
    const totalIngredientPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);

    return pizzaPrice + totalIngredientPrice;
};
