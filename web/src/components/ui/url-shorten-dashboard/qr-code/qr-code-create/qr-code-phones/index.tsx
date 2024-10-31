import React from 'react';
import FrameComponents from '../qr-code-frames';
import { useSelector } from 'react-redux';
import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import MultiLinkStep1 from '../../multi-link-components/multi-link-step1';
import PdfFrameComponent from '../../pdf-qr-code/pdf-frame-step-1';
import VCardFrame from '../../vcard-component/vcard-frame';
import EditLinkBio from '../../qr-code-component/edit-link-bio';

interface ComponentType {
    switchTab?: string;
}

const QrCodePreviewPhones = ({ switchTab }: ComponentType) => {
    const step = useSelector(qrCodeSelectors.selectStep);

    return (
        <div className="border w-[250px] h-[550px] border-[#A6A6A4] p-[1px] mt-6  mx-auto rounded-[37px]">
            <div
                className={`flex  border-4 relative border-black flex-col   w-full h-full justify-center  items-center rounded-[37px] `}
            >
                <div className="bg-black absolute top-0 w-12 h-4 flex justify-end items-center px-2 mt-2 rounded-full">
                    <div className="w-1 h-1 bg-slate-500 rounded-full" />
                </div>

                <div
                    className={`flex-1   h-full ${(step === 1 && switchTab === 'multi') || (step === 1 && switchTab === 'pdf') || switchTab === 'edit-link' || switchTab === 'vCard' ? `${switchTab !== 'vCard' ? 'p-4' : ''} ${step === 2 && switchTab === 'vCard' ? `w-fit ` : ' w-full '} ` : ''} `}
                >
                    {switchTab === 'website' ? (
                        <FrameComponents />
                    ) : switchTab === 'multi' ? (
                        <>
                            {step === 1 && <MultiLinkStep1 />}
                            {typeof step === 'number' && step > 1 && <FrameComponents />}
                        </>
                    ) : switchTab === 'pdf' ? (
                        <>
                            {step === 1 && <PdfFrameComponent />}
                            {typeof step === 'number' && step > 1 && <FrameComponents />}
                        </>
                    ) : switchTab === 'vCard' ? (
                        <>
                            {step === 1 && <VCardFrame />}
                            {typeof step === 'number' && step > 1 && <FrameComponents />}
                        </>
                    ) : switchTab === 'edit-link' ? (
                        <>
                            <EditLinkBio />
                        </>
                    ) : null}{' '}
                </div>
            </div>
        </div>
    );
};

export default QrCodePreviewPhones;
