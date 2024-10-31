import { Card, Input, Label } from '@shtcut-ui/react';
import React from 'react';
import { Minus, Plus } from 'lucide-react';
const QrCodeCompanyInfo = ({ isVisible, toggleVisibility }: { isVisible: boolean; toggleVisibility: () => void }) => {
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100 ">
            <section className="flex justify-between ">
                <section className="flex flex-col gap-2">
                    <Label>Company Information</Label>
                    <p className="text-sm text-[#5A5555]">Enter details</p>
                </section>
                {isVisible ? (
                    <Minus onClick={toggleVisibility} className="cursor-pointer" />
                ) : (
                    <Plus onClick={toggleVisibility} className="cursor-pointer" />
                )}
            </section>
            {isVisible && (
                <section className="flex flex-col gap-3 mt-4">
                    <Input placeholder="Company Name" />
                    <Input placeholder="Department" />
                </section>
            )}
        </Card>
    );
};

export default QrCodeCompanyInfo;
