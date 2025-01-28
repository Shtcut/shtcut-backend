import StarLoader from '@shtcut/components/loader/star-loader';
import React, { Dispatch, SetStateAction, useState } from 'react';
import LinkListedComponent from '../../link-listed-component';
import { FindAllLinkResresponseType, LinkNameSpace } from '@shtcut/_shared/namespace/link';
import { ModalType } from '@shtcut/types/types';
import PaginationTable from '@shtcut/components/pagination';
import { UsePaginationActions, UsePaginationState } from '@shtcut/types/pagination';
import { skeletonRows } from '@shtcut/components/card-skeleton';
import { Button } from '@shtcut-ui/react';
import { LoadingButton } from '@shtcut/components/_shared/loading-button';

interface LinkDataComponentProps {
    isLoading: boolean;
    findAllLinksResponse: FindAllLinkResresponseType | undefined;
    handleNavigate: (alias: string) => void;
    toggleSection: (modalType: ModalType, data: LinkNameSpace.Link) => void;
    handleUpdateLink: (data: LinkNameSpace.Link) => void;
    search: string;
    pagination: UsePaginationState;
    paginationActions: UsePaginationActions;
    setSelectedIds: Dispatch<SetStateAction<string[]>>;
    selectedIds: string[];
    handleDeleteMany: () => void;
}

const LinkDataComponent = ({
    findAllLinksResponse,
    isLoading,
    handleNavigate,
    handleUpdateLink,
    toggleSection,
    search,
    pagination,
    paginationActions,
    setSelectedIds,
    selectedIds,
    handleDeleteMany
}: LinkDataComponentProps) => {
    const handleCheckboxChange = (id: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedIds((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedIds((prevSelected) => prevSelected.filter((qrId) => qrId !== id));
        }
    };

    return (
        <>
            {selectedIds.length > 0 && (
                <div className="mb-4 flex justify-end mt-5">
                    <LoadingButton
                        onClick={handleDeleteMany}
                        className="bg-red-500 w-36  text-xs  "
                        loading={isLoading}
                    >
                        Delete Selected ({selectedIds.length})
                    </LoadingButton>
                </div>
            )}
            {isLoading ? (
                <div className="flex flex-col gap-y-[14px] mt-8">{skeletonRows}</div>
            ) : findAllLinksResponse && findAllLinksResponse?.data && findAllLinksResponse?.data.length > 0 ? (
                <div className="flex flex-col gap-y-[14px] mt-8">
                    {findAllLinksResponse?.data.map((data) => {
                        return (
                            <LinkListedComponent
                                key={data?._id}
                                data={data}
                                onClickNavigate={() => handleNavigate(data.alias)}
                                onDeleteClick={() => toggleSection('deleteModal', data)}
                                onDuplicateClick={() => toggleSection('duplicateModal', data)}
                                onQrCodeClick={() => toggleSection('qrCodeModal', data)}
                                handleUpdateLink={() => handleUpdateLink(data)}
                                onClickAchive={() => toggleSection('archiveModal', data)}
                                onClickShare={() => toggleSection('shareModal', data)}
                                checked={selectedIds.includes(data._id)}
                                onChange={() => handleCheckboxChange(data._id, !selectedIds.includes(data._id))}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="flex h-[60vh] justify-center items-center text-gray-500">
                    No data available for {search}
                </div>
            )}

            <section className="mt-6">
                <PaginationTable
                    pageSize={pagination.perPage ?? 10}
                    pageIndex={pagination.page - 1}
                    handleOnChange={paginationActions.handlePageChange}
                    totalItemsCount={findAllLinksResponse?.meta.pagination.totalCount ?? 0}
                    setPageIndex={paginationActions.setPage}
                    setPageSize={paginationActions.setPerPage}
                />
            </section>
        </>
    );
};

export default LinkDataComponent;
