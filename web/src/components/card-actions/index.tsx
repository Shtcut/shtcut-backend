import React from 'react';
import { PiChartBar, PiCopySimple } from 'react-icons/pi';
import FeatureActions from './feature-actions';
import { PencilLine, Trash2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const CardsActions = ({
    edit,
    onClickNavigation,
    numberOfClicks,
    onDeleteClick,
    onDuplicateClick,
    handleCopy,
    onQrCodeClick,
    onClickAchive,
    onClickShare,
    handleUpdateLink
}: {
    edit?: boolean | undefined;
    onClickNavigation: () => void;
    numberOfClicks: number;
    onDeleteClick?: (() => void) | undefined;
    onDuplicateClick?: (() => void) | undefined;
    onQrCodeClick?: (() => void) | undefined;
    onClickAchive?: (() => void) | undefined;
    onClickShare?: (() => void) | undefined;
    handleCopy?: () => void;
    handleUpdateLink?: () => void;
}) => {
    const route = useRouter();
    const pathName = usePathname();
    const handleNavigateEdit = () => {
        route.push(`${pathName}/edit`);
    };
    return (
        <div className="flex items-center gap-x-[6px]">
            {edit ? (
                <div
                    onClick={handleNavigateEdit}
                    className={
                        'text-xs cursor-pointer flex mx-auto items-center w-[95px] justify-center text-primary-0 rounded h-[34px] bg-white   font-medium border gap-x-2 border-primary-0'
                    }
                >
                    <PencilLine size={16} /> <span>Edit Link</span>
                </div>
            ) : (
                <div
                    className={
                        'text-xs cursor-pointer flex mx-auto items-center w-[83px] justify-center text-primary-0 rounded h-[34px] bg-[#F4F7FF]  font-semibold border gap-x-1 border-primary-0'
                    }
                >
                    <PiChartBar size={16} /> <span>{numberOfClicks} Clicks</span>
                </div>
            )}

            <div
                className="bg-[#F5F5F5]  w-[42px] h-[34px] flex items-center justify-center rounded cursor-pointer"
                onClick={handleCopy}
            >
                <PiCopySimple color="#726C6C" size={16} />
            </div>
            {edit ? (
                <div className="bg-[#F5F5F5]  w-[42px] h-[34px] flex items-center justify-center rounded cursor-pointer">
                    <Trash2 color="#726C6C" size={16} />
                </div>
            ) : (
                <FeatureActions
                    onClickNavigation={onClickNavigation}
                    onDeleteClick={onDeleteClick}
                    onDuplicateClick={onDuplicateClick}
                    onQrCodeClick={onQrCodeClick}
                    onClickShare={onClickShare}
                    onClickAchive={onClickAchive}
                    handleUpdateLink={handleUpdateLink}
                />
            )}
        </div>
    );
};

export default CardsActions;
