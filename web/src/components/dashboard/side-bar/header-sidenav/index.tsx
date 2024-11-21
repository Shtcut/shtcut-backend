'use client';

import * as React from 'react';
import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    Separator
} from '@shtcut-ui/react';
import { Plus, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Progress } from '@shtcut/components/_shared/Progress-bar';
import { useParams, useRouter } from 'next/navigation';
import { useWorkspace } from '@shtcut/hooks';
import { getInitials } from '@shtcut/_shared/constant';

const HeaderSideNav = ({
    isOpen,
    setIsOpen,
    openCreateWorkSpace
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    openCreateWorkSpace: () => void;
}) => {
    const { findAllWorkspacesResponse } = useWorkspace({ callWorkspaces: true });
    console.log('findAllWorkspacesResponse', findAllWorkspacesResponse);
    const [open, setOpen] = React.useState(false);
    const { module, workspace } = useParams();
    console.log('module', module);
    console.log('workspace', workspace);
    const router = useRouter();
    const activeWorkspace = findAllWorkspacesResponse?.find((data) => data.slug === workspace);
    const activeWorkspaceName = activeWorkspace?.name || 'Default Workspace';

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={`border-t flex w-full ${isOpen ? 'flex-row h-14 ' : 'flex-col items-center justify-center'} `}>
            <div className={`w-full flex ${isOpen ? 'justify-start' : 'justify-center'}  items-center`}>
                <DropdownMenu onOpenChange={handleToggle}>
                    <DropdownMenuTrigger asChild>
                        <div
                            className={` cursor-pointer flex  items-center ${isOpen ? 'pl-5 justify-between' : ' justify-center'} `}
                        >
                            <div className={`flex items-center justify-center ${isOpen ? 'space-x-[16px]' : ''}`}>
                                <div className="py-4 ">
                                    <Image src={'/images/icon.png'} width={36} height={36} alt="logo" />
                                </div>
                                {isOpen && (
                                    <div>
                                        <p className="font-bold  text-sm ">{activeWorkspaceName}</p>
                                        <p className="text-[#83899F] text-xs ">Workspace</p>
                                    </div>
                                )}
                            </div>{' '}
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60  rounded-[10px] relative left-12 p-0">
                        <section className="bg-primary-0 p-4 rounded-[10px]">
                            <div className="flex items-center justify-between">
                                <div className="flex text-white items-center space-x-[4px]">
                                    <Image src={'/images/icon.png'} width={21} height={21} alt="logo" />
                                    <p className="font-bold">{activeWorkspaceName}</p>
                                </div>
                                <p className="text-xs font-medium text-white">Manage</p>
                            </div>
                            <div className="bg-white rounded-[10px] pb-3 mt-4 px-2">
                                <div className="flex justify-between cursor-pointer items-center py-3">
                                    <Button className="w-[52px] h-[24px] rounded-[10px] text-xs">Team</Button>
                                    <p className="text-[#2B2829] text-xs font-semibold">2 of 10 seats used</p>
                                </div>
                                <Progress className="bg-[#D6F9D8] h-[6px]" value={33} />
                            </div>
                        </section>
                        <div className="flex flex-col gap-4 p-4">
                            {findAllWorkspacesResponse &&
                                findAllWorkspacesResponse?.map((data) => (
                                    <section
                                        key={data?._id}
                                        className=" cursor-pointer"
                                        onClick={() => {
                                            if (data?.name) {
                                                router.push(`/${module}/${data.slug}/overview`);
                                            }
                                        }}
                                    >
                                        <div className="bg-black text-white w-[27px] h-[27px] flex justify-center rounded-full items-center float-left mr-2">
                                            <p className="text-[10px] font-medium"> {getInitials(data?.name)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs">{data?.name}</p>
                                            <p className="text-[#726C6C] text-xs">
                                                {data?.type} * {data?.members?.length} members
                                            </p>
                                        </div>
                                    </section>
                                ))}
                            <DropdownMenuCheckboxItem
                                onClick={openCreateWorkSpace}
                                className=" flex  items-center gap-x-2 text-xs mt-2 font-semibold text-[#433E3F] p-2 cursor-pointer"
                            >
                                <Plus size={16} /> Add New Workspace
                            </DropdownMenuCheckboxItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Separator orientation={isOpen ? 'vertical' : 'horizontal'} />
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-20 py-3 cursor-pointer flex justify-center items-center"
            >
                <ArrowLeft size={16} />
            </div>
        </div>
    );
};
export default HeaderSideNav;
