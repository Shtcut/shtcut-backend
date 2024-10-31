import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Image as LucideImage, MapPin, Phone } from 'lucide-react';
import { Card } from '@shtcut-ui/react';
import { PiBuildingOfficeFill, PiCreditCardFill, PiEnvelopeLight } from 'react-icons/pi';
import { BsEnvelope, BsTelephoneFill } from 'react-icons/bs';
import { FaGlobeAfrica } from 'react-icons/fa';
const VCardFrame = () => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const imageSelected = useSelector(qrCodeSelectors.selectImage);

    const contactActions = [
        {
            name: 'Phone',
            icon: <BsTelephoneFill />
        },
        {
            name: 'Email',
            icon: <BsEnvelope />
        },
        {
            name: 'Website',
            icon: <FaGlobeAfrica size={16} />
        }
    ];

    const ReusableComponent = ({ icons, name }: { name: string; icons: ReactNode }) => {
        return (
            <section className="flex bg-white px-2 rounded-md shadow-sm py-4 gap-2 items-center">
                <div className="text-[#0D2C7A]"> {icons}</div>
                <p className="text-[10px] font-medium">{name}</p>
            </section>
        );
    };

    return (
        <div className="w-full bg-[#eaeff2] rounded-[32px] h-full">
            <div className="bg-[#0D2C7A] rounded-t-[32px] h-[50%] w-full px-4 flex justify-center items-center">
                <div className="flex gap-4 flex-col  items-center w-full">
                    {imageSelected ? (
                        <Image alt="" src={imageSelected as string} width={60} height={60} className="rounded-full" />
                    ) : (
                        <section className="h-20 w-20 rounded-full border bg-white shadow-sm flex justify-center items-center">
                            <LucideImage color="#B5B3B3" size={40} />
                        </section>
                    )}
                    <div>
                        <p className="text-sm text-white font-medium "> {qrCodeName ? String(qrCodeName) : 'Name'}</p>
                        <p className="text-xs text-[#DCE5FB]">Job Title</p>
                    </div>
                    <section className="flex gap-2 w-full">
                        {contactActions.map((_c) => (
                            <Card className="bg-white w-full shadow-sm h-11  flex flex-col items-center justify-center rounded-md">
                                <div className="text-[#0D2C7A]">{_c.icon}</div>
                                <p className="text-[10px] font-medium text-[#0D2C7A]">{_c.name}</p>
                            </Card>
                        ))}
                    </section>
                </div>
            </div>
            <section className="flex  flex-col gap-2 px-4 overflow-y-auto h-[50%] py-4 mb-3">
                <ReusableComponent icons={<BsTelephoneFill size={18} />} name="+2347064442818" />
                <ReusableComponent icons={<PiEnvelopeLight size={18} />} name="stephenado17@gmail.com" />
                <ReusableComponent icons={<Phone size={18} />} name="stephanos.com" />
                <ReusableComponent icons={<MapPin size={18} />} name="17 Huston, Texas, United states" />{' '}
                <ReusableComponent icons={<PiBuildingOfficeFill size={18} />} name="Johnsons Limited" />
                <ReusableComponent icons={<PiCreditCardFill size={18} />} name="Sales" />{' '}
                <ReusableComponent
                    icons={<Image src={'/logos/skill-icons_instagram.png'} width={18} height={18} alt="" />}
                    name="Johnsons Limited"
                />
                <ReusableComponent
                    icons={<Image src={'/logos/facebook.png'} width={18} height={18} alt="" />}
                    name="Johnsons Limited"
                />
            </section>
        </div>
    );
};

export default VCardFrame;
