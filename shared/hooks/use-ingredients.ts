import { useEffect, useState } from 'react';
import { Api } from '@/shared/services/api-client';
import { Ingredient } from '@prisma/client';

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchIngredients();
    }, []);

    return { ingredients, loading };
};
