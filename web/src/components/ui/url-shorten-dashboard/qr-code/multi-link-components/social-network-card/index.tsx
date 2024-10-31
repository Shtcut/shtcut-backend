import Image from 'next/image';
import React from 'react';
interface ReusableComponentProps {
    logoUrl?: string;
    title: string;
    icons?: any;
    onClick?: () => void;
}

const SocialMediaCard = ({ onClick, logoUrl, title, icons }: ReusableComponentProps) => {
    return (
        <div className="relative group w-16 h-16 cursor-pointer" onClick={onClick}>
            <div className="bg-[#F9F9F9]  cursor-pointer rounded-[10px] border border-[#E3E3E3] w-full h-full flex justify-center items-center">
                {icons ? icons : <Image src={logoUrl!} width={30} height={30} alt={title} />}
            </div>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]">
                <p className="text-white text-xs font-medium text-center">{title}</p>
            </div>
        </div>
    );
};

export default SocialMediaCard;
