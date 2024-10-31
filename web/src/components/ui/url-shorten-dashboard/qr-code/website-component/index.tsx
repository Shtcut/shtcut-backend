import { Input } from '@shtcut-ui/react';
import React from 'react';
import ActionQrCodeTab from './actions-tab';
import Stepper from '@shtcut/components/stepper/horizontal-stepper';
import QrCodeName from './qr-code-name';
import { QrCodeInterface } from '@shtcut/types/types';

const WebsiteComponent = ({ step }: QrCodeInterface) => {
    return (
        <div className=" flex flex-col  gap-2">
            <section className="w-full h-24  bg-white rounded-[10px] shadow-sm border border-gray-100 ">
                <Stepper step={step} />
            </section>
            {step === 1 && (
                <div className="shadow-sm mt-2 border border-gray-100  rounded-[10px] gap-2">
                    <div className="bg-white p-[23px] rounded-[10px]">
                        <p className="font-medium text-sm mb-2">Website URL</p>
                        <Input placeholder="https//shtcut/help/example/what-is-shtcut" />
                    </div>
                </div>
            )}

            {step === 2 && <ActionQrCodeTab />}
            {step === 3 && (
                <section className="  shadow-sm border border-gray-100  rounded-[10px] gap-2">
                    <QrCodeName />
                </section>
            )}
        </div>
    );
};

export default WebsiteComponent;
