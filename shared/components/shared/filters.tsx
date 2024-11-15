'use client';

import { CheckboxFiltersGroup } from '@/shared/components/shared/checkbox-filters-group';
import { Title } from '@/shared/components/shared/title';
import { Input } from '@/shared/components/ui';
import { RangeSlider } from '@/shared/components/ui/range-slider';
import { FC } from 'react';
import { useFilters, useIngredients, useQueryFilters } from '../../hooks';

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />
            <CheckboxFiltersGroup
                name="sizes"
                className="mb-5"
                title="Размеры"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="mb-3 font-bold">Цена от и до:</p>
                <div className="mb-5 flex gap-3">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={5000}
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) =>
                            filters.setPrices(
                                'priceFrom',
                                Number(e.target.value)
                            )
                        }
                    />
                    <Input
                        type="number"
                        placeholder="5000"
                        min={1500}
                        max={5000}
                        value={String(filters.prices.priceTo)}
                        onChange={(e) =>
                            filters.setPrices('priceTo', Number(e.target.value))
                        }
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={5000}
                    step={10}
                    value={[
                        filters.prices.priceFrom || 0,
                        filters.prices.priceTo || 5000,
                    ]}
                    onValueChange={updatePrices}
                />
            </div>
            <CheckboxFiltersGroup
                className="mt-5"
                title="Игридиенты"
                limit={6}
                items={items}
                defaultItems={items.slice(0, 6)}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
                name="ingredients"
            />
        </div>
    );
};
