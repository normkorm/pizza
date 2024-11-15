import { FC } from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    imageUrl: string;
    size: 20 | 30 | 40;
}

export const PizzaImage: FC<Props> = ({ imageUrl, size, className }) => {
    return (
        <div
            className={cn(
                'flex items-center justify-center flex-1 relative w-full',
                className
            )}
        >
            <img
                src={imageUrl}
                alt="Logo"
                className={cn(
                    'relative left-2 top-2 transition-all z-10 duration-300',
                    {
                        'size-[300px]': size === 20,
                        'size-[400px]': size === 30,
                        'size-[500px]': size === 40,
                    }
                )}
            />
            <div className="absolute left-1/2 top-1/2 size-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
            <div className="absolute left-1/2 top-1/2 size-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-100" />
        </div>
    );
};
