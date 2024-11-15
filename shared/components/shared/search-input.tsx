'use client';

import { cn } from '@/shared/lib/utils';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import { FC, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/shared/services/api-client';

interface SearchInputProps {
    className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [focused, setFocused] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const ref = useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery);
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        },
        250,
        [searchQuery]
    );

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    };

    return (
        <>
            {focused && <div className="fixed inset-0 z-30 bg-black/50"></div>}
            <div
                className={cn(
                    'relative z-30 flex h-11 flex-1 justify-between rounded-2xl',
                    className
                )}
                ref={ref}
            >
                <Search className="absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-400" />
                <input
                    className="w-full rounded-2xl bg-gray-100 pl-11 outline-none"
                    type="text"
                    placeholder="Найти пиццу"
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {products.length > 0 && (
                    <div
                        className={cn(
                            'invisible absolute top-14 z-30 w-full rounded-xl bg-white py-2 opacity-0 shadow-md transition-all duration-200',
                            focused && 'visible top-12 opacity-100'
                        )}
                    >
                        {products.map((product) => (
                            <Link
                                onClick={onClickItem}
                                key={product.id}
                                className="hover:bg-primary/10 flex w-full items-center gap-3 px-3 py-2"
                                href={`/product/${product.id}`}
                            >
                                <img
                                    className="size-8 rounded-sm"
                                    src={product.imageUrl}
                                    width={32}
                                    height={32}
                                    alt={product.name}
                                />
                                <span>{product.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
