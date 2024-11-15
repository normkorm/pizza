'use client';

import type { FilterCheckboxProps } from '@/shared/components/shared/filter-checkbox';
import { FilterCheckbox } from '@/shared/components/shared/filter-checkbox';
import { Input, Skeleton } from '@/shared/components/ui';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultValue?: Item[];
    limit?: number;
    defaultItems?: Item[];
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    className?: string;
    loading?: boolean;
    selected?: Set<string>;
    name?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
    title,
    items,
    defaultItems,
    className,
    loading,
    searchInputPlaceholder = 'Поиск...',
    onClickCheckbox,
    selected,
    name,
    limit = 5,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    if (loading) {
        return (
            <div className={className}>
                <p className="mb-3 font-bold">{title}</p>
                {...Array(limit)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} className="mb-4 h-6 rounded" />
                    ))}
                <Skeleton className="mb-4 h-6 w-32 rounded" />
            </div>
        );
    }

    const list = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
          )
        : (defaultItems || items).slice(0, limit);

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={className}>
            <p className="mb-3 font-bold">{title}</p>
            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="border-none bg-gray-50"
                    />
                </div>
            )}

            <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
                {list?.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selected?.has(item.value)}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        name={name}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div
                    className={
                        showAll ? 'mt-4 border-t border-t-neutral-100' : ''
                    }
                >
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="text-primary mt-3"
                    >
                        {showAll ? 'скрыть' : '+ показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
