import React from 'react';
import { Image as LucideImage } from 'lucide-react';
import { useSelector } from 'react-redux';
import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import Image from 'next/image';
const MultiLinkStep1 = () => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const imageSelected = useSelector(qrCodeSelectors.selectImage);
    return (
        <div className="pt-6">
            <section className="flex justify-center flex-col items-center gap-4 ">
                {imageSelected ? (
                    <Image alt="" src={imageSelected as string} width={80} height={60} className="rounded-md" />
                ) : (
                    <section className="h-20 w-20 rounded-md border flex justify-center items-center">
                        <LucideImage color="#B5B3B3" size={40} />
                    </section>
                )}
                <p className="text-sm font-medium"> {qrCodeName ? String(qrCodeName) : 'Title'}</p>
                <section className="w-full flex flex-col gap-2">
                    {[1, 2].map((index) => (
                        <section className="h-10 w-full rounded-lg border flex items-center px-2 gap-2">
                            <LucideImage color="#B5B3B3" size={16} />
                            <p>Link {index + 1}</p>
                        </section>
                    ))}
                </section>
            </section>
        </div>
    );
};

export default MultiLinkStep1;
