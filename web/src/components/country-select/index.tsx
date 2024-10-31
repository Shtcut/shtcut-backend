/** @format */

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@shtcut-ui/react';
import React, { useState } from 'react';
import countryList from 'react-select-country-list';

function CountrySelector() {
    const [selectedCountry, setSelectedCountry] = useState<any>(null); // Use any type for selectedCountry temporarily
    const options = countryList().getData();

    const handleSelectChange = (country: { label: string; value: string }) => {
        setSelectedCountry(country);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span>{selectedCountry ? selectedCountry.label : 'Select a country'}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {options.map((country: { label: string; value: string }) => (
                    <DropdownMenuItem key={country.value} onSelect={() => handleSelectChange(country)}>
                        {country.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default CountrySelector;
