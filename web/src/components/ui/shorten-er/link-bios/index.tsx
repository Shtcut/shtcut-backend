import { Button, Modal } from '@shtcut-ui/react';

import React, { useEffect, useState } from 'react';
import LinkBioCard from './components/link-bio-card';
import { usePathname, useRouter } from 'next/navigation';
import { LinkBioActions, LinkBioApiResponse, LinkBioStateType } from '@shtcut/types/link-bio';
import { skeletonRows } from '@shtcut/components/card-skeleton';
import { UsePaginationActions, UsePaginationState } from '@shtcut/types/pagination';
import PaginationTable from '@shtcut/components/pagination';
import DeleteComponent from '@shtcut/components/dashboard/link/link-component/delete-modal';

const LinkBiosComponent = ({
    findAllLinkBioResponse,
    linkBioLoading,
    pagination,
    paginationActions,
    linkBiosState,
    linkBioActions
}: {
    findAllLinkBioResponse: LinkBioApiResponse | undefined;
    linkBioLoading: boolean | undefined;
    pagination: UsePaginationState;
    paginationActions: UsePaginationActions;
    linkBiosState: LinkBioStateType;
    linkBioActions: LinkBioActions;
}) => {
    const router = useRouter();
    const pathName = usePathname();
    const [showDelete, setShowDeleteModal] = useState(false);
    const [linkbioId, setLinkBioId] = useState<string>('');
    const handleCloseModal = () => {
        setShowDeleteModal(false);
    };
    const handleShowDelete = (id: string) => {
        setShowDeleteModal(true);
        setLinkBioId(id);
    };
    const doFind = () => {
        linkBioActions.findAllLinkBio({
            ...linkBiosState.params
        });
    };

    const handleDeleteLinkBio = (id: string) => {
        linkBioActions.setLoadingState('deleting', true);
        linkBioActions.deleteLinkBio({
            payload: { id },
            options: {
                successMessage: 'Link-bio deleted successfully',
                onSuccess: () => {
                    linkBioActions.findAllLinkBio();
                }
            }
        });
    };

    const { isSuccess: isDeleted } = linkBiosState?.deleteLinkBioResponse;
    useEffect(() => {
        if (isDeleted) {
            doFind();
            handleCloseModal();
            linkBioActions.setLoadingState('deleting', false);
        }
    }, [isDeleted]);

    return (
        <div>
            <div className="flex justify-between  items-center">
                <h1 className="font-semibold text-[#2B2829] text-xl">Link-in-bio</h1>

                <Button
                    className="bg-primary-0 text-xs h-8 rounded "
                    onClick={() => router.push(`${pathName}/create-link-bio`)}
                >
                    Create New Link
                </Button>
            </div>
            <section>
                {linkBioLoading ? (
                    <div className="flex flex-col gap-y-[14px] mt-8">{skeletonRows}</div>
                ) : findAllLinkBioResponse &&
                  findAllLinkBioResponse?.data &&
                  findAllLinkBioResponse?.data?.length > 0 ? (
                    <div className="flex flex-col gap-y-[14px] mt-8">
                        {findAllLinkBioResponse &&
                            findAllLinkBioResponse?.data?.map((data, index) => (
                                <div key={index}>
                                    <LinkBioCard data={data} handleShowDelete={() => handleShowDelete(data?.id)} />
                                </div>
                            ))}
                    </div>
                ) : (
                    <div className="flex h-[60vh] justify-center items-center text-gray-500">
                        No data available for {''}
                    </div>
                )}
                <section className="mt-6">
                    <PaginationTable
                        pageSize={pagination.perPage ?? 10}
                        pageIndex={pagination.page - 1}
                        handleOnChange={paginationActions.handlePageChange}
                        totalItemsCount={findAllLinkBioResponse?.meta.pagination.totalCount ?? 0}
                        setPageIndex={paginationActions.setPage}
                        setPageSize={paginationActions.setPerPage}
                    />
                </section>
            </section>
            <Modal setShowModal={setShowDeleteModal} onClose={handleCloseModal} showModel={showDelete}>
                <DeleteComponent
                    isLoadingState={linkBiosState.isLoadingState}
                    handleDelete={() => handleDeleteLinkBio(linkbioId)}
                    handleClose={handleCloseModal}
                    description="Deleting this link-bio will redirect it to the shtcut erro page and can not be undone."
                    title="link-bio"
                />
            </Modal>
        </div>
    );
};

export default LinkBiosComponent;
