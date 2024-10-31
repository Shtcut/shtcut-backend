import { Tabs, TabsList, TabsTrigger, TabsContent } from '@shtcut-ui/react';
import { Link, List } from 'lucide-react';
import { PiFilePdfDuotone } from 'react-icons/pi';
import { PiIdentificationCard } from 'react-icons/pi';
import React from 'react';
import WebsiteComponent from '../website-component';
import { QrCodeInterface } from '@shtcut/types/types';

const QrCodeSelectTabs = ({ handleTabChange, step }: QrCodeInterface) => {
    return (
        <div>
            <Tabs defaultValue="website" className="w-full">
                <TabsList className="block border-none bg-transparent gap-0 m-0 p-0 ">
                    <section className="bg-white shadow-sm border border-gray-100  rounded-[10px] p-[23px]">
                        <h2 className="font-medium mb-[22px] text-[#151314]">Select QR Code Type</h2>
                        <section className=" w-full gap-x-[10px] flex flex-1">
                            <TabsTrigger
                                className="border shadow-none text-black/60 h-9 w-32 data-[state=active]:text-primary-0 data-[state=active]:border-primary-0 text-xs flex items-center justify-center gap-x-2 data-[state=active]:shadow-none"
                                value="website"
                                onClick={() => handleTabChange('website')}
                            >
                                <div>
                                    <Link size={16} />
                                </div>{' '}
                                Website URL
                            </TabsTrigger>
                            <TabsTrigger
                                className="border shadow-none text-black/60 h-9 w-32 data-[state=active]:text-primary-0 data-[state=active]:border-primary-0 text-xs flex items-center justify-center gap-x-2 data-[state=active]:shadow-none"
                                value="multi"
                                onClick={() => handleTabChange('multi')}
                            >
                                <List size={18} /> Multi links
                            </TabsTrigger>
                            <TabsTrigger
                                value="pdf"
                                className="border shadow-none text-black/60 h-9 w-32 data-[state=active]:text-primary-0 data-[state=active]:border-primary-0 text-xs flex items-center justify-center gap-x-2 data-[state=active]:shadow-none"
                            >
                                <PiFilePdfDuotone size={18} /> PDF
                            </TabsTrigger>
                            <TabsTrigger
                                value="vCard"
                                className="border shadow-none text-black/60 h-9 w-32 data-[state=active]:text-primary-0 data-[state=active]:border-primary-0 text-xs flex items-center justify-center gap-x-2 data-[state=active]:shadow-none"
                                onClick={() => handleTabChange('vCard')}
                            >
                                <PiIdentificationCard size={18} /> vCard Plus
                            </TabsTrigger>
                        </section>
                    </section>
                </TabsList>
                <div className="mt-32  ">
                    <TabsContent value="website">
                        <WebsiteComponent step={step} />
                    </TabsContent>
                    <TabsContent value="multi">multi</TabsContent>
                    <TabsContent value="pdf">pdf</TabsContent>
                    <TabsContent value="vCard">vCard</TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default QrCodeSelectTabs;
