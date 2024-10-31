import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import { LucideImage } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const PdfFrameComponent = () => {
    const imageSelected = useSelector(qrCodeSelectors.selectImage);
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    return (
        <div className="flex flex-col gap-5 items-center mt-8">
            <p className="text-center font-medium">PDF File</p>
            <section className="h-12 w-full rounded-lg border flex items-center px-2 gap-2">
                {imageSelected ? (
                    <Image alt="" src={imageSelected as string} width={28} height={28} className="rounded-md" />
                ) : (
                    <LucideImage color="#B5B3B3" size={28} />
                )}
                <div>
                    <p className="text-xs font-medium">{qrCodeName ? String(qrCodeName) : 'Title'}</p>
                    <p className="text-xs text-[#0A0A0B]">Description</p>
                </div>
            </section>
        </div>
    );
};

export default PdfFrameComponent;
