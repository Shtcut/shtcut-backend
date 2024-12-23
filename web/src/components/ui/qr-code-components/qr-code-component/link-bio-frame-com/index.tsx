import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Image as LucideImage } from 'lucide-react';
const LinkBioFrameComponent = ({ linksBio }: { linksBio: LinkBioDataType[] }) => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const imageSelected = useSelector(qrCodeSelectors.selectImage);
    const descriptionValue = useSelector(qrCodeSelectors.setDescription);
    const ReusableComponent = ({ icons, name }: { name: string; icons: ReactNode }) => {
        return (
            <section className="flex border-b p-2 gap-2 items-center bg-[#FFE8F0] rounded-md">
                <div> {icons}</div>
                <p className="text-[10px]">{name}</p>
            </section>
        );
    };
    return (
        <div className=" mt-4 w-full">
            <div className="bg-[#FFE8F0] rounded-md h-40 w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    {imageSelected ? (
                        <Image alt="" src={imageSelected as string} width={80} height={60} className="rounded-md" />
                    ) : (
                        <section className="h-20 w-20 rounded-md border bg-white shadow-sm flex justify-center items-center">
                            <LucideImage color="#B5B3B3" size={40} />
                        </section>
                    )}
                    <p className="text-sm font-medium mt-2"> {qrCodeName ? String(qrCodeName) : 'Name'}</p>

                    <p className="text-xs ">{descriptionValue ? (descriptionValue as string) : 'Job title'}</p>
                </div>
            </div>
            <section className="flex flex-col mt-4 gap-2">
                {linksBio &&
                    linksBio.map((bio) => (
                        <ReusableComponent
                            icons={<Image src={bio.image as string} width={14} height={16} alt="" />}
                            name={bio.title}
                        />
                    ))}
            </section>
        </div>
    );
};

export default LinkBioFrameComponent;
