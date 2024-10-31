import { Card, Checkbox, Label } from '@shtcut-ui/react';
import { QrCodeHeaderTypes } from '@shtcut/types/types';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const PdfCardComponent = ({ toggleVisibility, isVisible }: { toggleVisibility: () => void; isVisible: boolean }) => {
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100 ">
            <section>
                <section className="flex justify-between ">
                    <section className="flex flex-col gap-2">
                        <Label>PDF File</Label>
                        <p className="text-sm text-[#5A5555]">Import file</p>
                    </section>
                    {isVisible ? (
                        <Minus onClick={toggleVisibility} className="cursor-pointer" />
                    ) : (
                        <Plus onClick={toggleVisibility} className="cursor-pointer" />
                    )}
                </section>
                {isVisible && (
                    <section>
                        <section className="border mt-4 gap-4 flex items-center px-4 rounded-md py-2">
                            <section className="border w-14 h-14 flex justify-center items-center rounded-md">
                                <Image src={'/images/fa-solid_file-pdf.png'} width={24} height={24} alt="pdf" />
                            </section>
                            <section>
                                <p className="font-medium">Pdf name</p>
                                <p className="text-xs font-medium">15mb</p>
                            </section>
                        </section>
                        <section className="flex items-center mt-4 gap-2">
                            <Checkbox />
                            <p className="text-xs font-medium">Directly show PDF File</p>
                        </section>
                    </section>
                )}
            </section>
        </Card>
    );
};

export default PdfCardComponent;
