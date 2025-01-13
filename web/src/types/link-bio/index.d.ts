import { Meta } from '@shtcut/_shared/namespace';
import { LinkBioDataType } from '../link';

export interface LinkBioStateType {
    isLoadingState: boolean;
    createLinkBioResponse: LinkBioDataResponse | undefined;
    findAllLinkBioResponse?: LinkBioApiResponse | undefined;
    findLinkBioLoading?: boolean;
    pagination: UsePaginationState;
    deleteLinkBioResponse: Dict;
    params: UseLinkBioProps;
    getLinkBioData: LinkBioDataResponse | undefined;
    getLinkBioLoading: boolean;
}
export interface LinkBioActions {
    createLinkBio: (payload: LinkBioDataPayload | any) => Promise<any>;
    setLoadingState: (key: 'creating' | 'deleting' | 'updating', value: boolean) => void;
    findAllLinkBio?: any;
    paginationActions: UsePaginationActions;
    deleteLinkBio: MutationTrigger<any>;
    getLinkBio: any;
}

export interface LinkBioApiResponse {
    data: LinkBioDataResponse[];
    meta: Meta;
}

export interface LinkBioDataResponse {
    publicId: string;
    links: LinkBioDataType[];
    name: string;
    profileImage: string;
    template: string;
    title: string;
    workspace: string;
    slug: string;
    description: string;
    colors: {
        background?: string;
        btnColor?: string;
        presetColor?: string;
    };
    active: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
    id: string;
}

export interface LinkBioDataPayload {
    payload: {
        colors: {
            bgColor?: string;
            btnColor?: string;
            presetColor?: string;
        };
        description: string;
        links: LinkBioDataType[];
        name: string;
        profileImage: string;
        template: string;
        title: string;
        workspace?: string;
    };
}

export interface UseLinkBioProps {
    id?: string;
    key?: string;
    callLinkbio?: boolean;
    search?: string;
    filter?: Dict;
    url?: string;
    all?: boolean;
}
