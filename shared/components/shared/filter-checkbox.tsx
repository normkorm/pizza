import { Checkbox } from '@/shared/components/ui';
import type { FC, ReactNode } from 'react';

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    checked,
    onCheckedChange,
    name,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="size-6 rounded-[8px]"
                id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label
                htmlFor={`checkbox-${String(name)}-${String(value)}`}
                className="flex-1 cursor-pointer leading-none"
            >
                {text}
            </label>
            {endAdornment}
        </div>
    );
};
