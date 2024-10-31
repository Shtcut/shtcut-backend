import React, { useState, useEffect } from 'react';
import { City, Country, State } from 'country-state-city';

type CountryOption = {
    label: string;
    value: string;
};

type StateOption = {
    label: string;
    value: string;
};

type CityOption = {
    label: string;
    value: string;
};

const CountryStateSelectors = () => {
    const countryData = Country.getAllCountries();
    const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);
    const [stateOptions, setStateOptions] = useState<StateOption[]>([]);
    const [cityOptions, setCityOptions] = useState<CityOption[]>([]);

    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
    const [selectedState, setSelectedState] = useState<StateOption | null>(null);
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

    useEffect(() => {
        const formattedCountries = countryData.map((country) => ({
            label: country.name,
            value: country.isoCode
        }));
        setCountryOptions(formattedCountries);
    }, [countryData]);

    useEffect(() => {
        if (selectedCountry) {
            const states = State.getStatesOfCountry(selectedCountry.value);
            const formattedStates = states.map((state) => ({
                label: state.name,
                value: state.isoCode
            }));
            setStateOptions(formattedStates);
            setSelectedState(null);
            setCityOptions([]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState && selectedCountry) {
            const cities = City.getCitiesOfState(selectedCountry.value, selectedState.value);
            const formattedCities = cities.map((city) => ({
                label: city.name,
                value: city.name
            }));
            setCityOptions(formattedCities);
            setSelectedCity(null);
        }
    }, [selectedState, selectedCountry]);

    // Modify these handlers to accept the `value` (string)
    const handleCountryChange = (value: string) => {
        const selectedOption = countryOptions.find((option) => option.value === value) || null;
        setSelectedCountry(selectedOption);
    };

    const handleStateChange = (value: string) => {
        const selectedOption = stateOptions.find((option) => option.value === value) || null;
        setSelectedState(selectedOption);
    };

    return {
        stateOptions,
        countryOptions,
        handleCountryChange,
        handleStateChange,
        selectedState,
        selectedCountry
    };
};

export default CountryStateSelectors;
