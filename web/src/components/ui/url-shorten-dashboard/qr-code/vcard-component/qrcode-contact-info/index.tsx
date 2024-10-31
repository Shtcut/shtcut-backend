import { Card, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shtcut-ui/react';
import React from 'react';
import { Minus, Plus } from 'lucide-react';
import CountryStateSelectors from '@shtcut/components/country-select/country';

const QrCodeContactInfo = ({ isVisible, toggleVisibility }: { isVisible: boolean; toggleVisibility: () => void }) => {
    const { countryOptions, handleCountryChange, handleStateChange, selectedCountry, selectedState, stateOptions } =
        CountryStateSelectors();
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100 ">
            <section className="flex justify-between ">
                <section className="flex flex-col gap-2">
                    <Label>Contact Information's</Label>
                    <p className="text-sm text-[#5A5555]">Enter details</p>
                </section>
                {isVisible ? (
                    <Minus onClick={toggleVisibility} className="cursor-pointer" />
                ) : (
                    <Plus onClick={toggleVisibility} className="cursor-pointer" />
                )}
            </section>
            {isVisible && (
                <section className="mt-4">
                    <section className="border-b pb-3 flex flex-col w-full gap-3">
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Email Address" />
                        <Input placeholder="Website URL" />
                    </section>
                    <section className="mt-4">
                        <Label>Address</Label>
                        <section className="flex flex-col gap-3 mt-4">
                            <Input placeholder="Street Address" className="" />
                            <section className="flex  items-center gap-2">
                                <Select value={selectedCountry?.value ?? undefined} onValueChange={handleCountryChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue
                                            placeholder="Country"
                                            className="text-sm placeholder:text-muted-foreground "
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countryOptions.map((country) => (
                                            <SelectItem key={country.value} value={country.value}>
                                                {country.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {stateOptions.length > 0 ? (
                                    <Select value={selectedState?.value ?? undefined} onValueChange={handleStateChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue
                                                placeholder="State"
                                                className="placeholder:text-muted-foreground"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {stateOptions.map((state) => (
                                                <SelectItem key={state.value} value={state.value}>
                                                    {state.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                ) : (
                                    <Input placeholder="State" />
                                )}
                                <Input placeholder="Zip Code" />
                            </section>
                            <Input placeholder="City" />
                        </section>
                    </section>
                </section>
            )}
        </Card>
    );
};

export default QrCodeContactInfo;
