import { cn } from '@/shared/lib/utils';
import type { FC, PropsWithChildren } from 'react';

interface Props {
    className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn('mx-auto max-w-screen-xl', className)}>
            {children}
        </div>
    );
};
