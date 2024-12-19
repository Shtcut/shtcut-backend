import { Button } from '@shtcut-ui/react';
import { SearchType } from '@shtcut/_shared/namespace/link';
import { SearchInput } from '@shtcut/components/dashboard/nav-component';
import { Archive, Download, Filter, PencilLine, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { PiSortDescendingBold } from 'react-icons/pi';
import ImportLinkDropDown from '../link-component/import-link-dropdown';
import FilterLinkDropDown from '../link-component/filter-link-dropdown';

const SearchFilterActions = ({ onSearchChange, search }: SearchType) => {
    const router = useRouter();
    const pathName = usePathname();
    const handleNavigateToArchive = () => {
        router.push(`${pathName}/archive`);
    };
    return (
        <div className="flex justify-between mt-4">
            <SearchInput onChange={(e) => onSearchChange(e.target.value)} value={search} />
            <div className="flex items-center space-x-[12px]">
                <FilterLinkDropDown />
                <Button className="flex border   hover:bg-primary-0 hover:text-white shadow-none font-normal w-11 h-9 text-[#5A5555] items-center bg-white gap-x-2 ">
                    <div>
                        <PiSortDescendingBold size={18} />
                    </div>
                </Button>
                <ImportLinkDropDown handleNavigateToArchive={handleNavigateToArchive} />
            </div>
        </div>
    );
};

export default SearchFilterActions;
