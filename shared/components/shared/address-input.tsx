'use client';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { FC } from 'react';

interface Props {
    onChange?: (value?: string) => void;
}

export const AddressInput: FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            filterLocations={[{ country: 'Казахстан' }]}
            token={process.env.NEXT_PUBLIC_DADATA_API_KEY || ''}
            onChange={(data) => onChange?.(data?.value)}
        />
    );
};
