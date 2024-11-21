import { Dict } from '@shtcut-ui/react';
import { DomainNameSpace } from '@shtcut/_shared/namespace/domain';

interface Props {
    color?: string;
    size?: number;
}
type GeneralType = {
    id: number;
    icons?: IconType;
    title: string;
    text?: string;
};

interface Plan {
    id: number;
    status: string;
    amt: number | string;
    section?: string;
    text: string;
    data: string[];
}

interface TypingTextProps {
    text: string;
    speed: number;
}

interface IntegrationSectionType {
    text: string;
    id: string;
    img: string[];
    title: string;
}

interface PlanCard {
    plan: {
        id: number;
        title: string;
        text: string;
        amt: string;
        plan: string;
        btnText: string;
        plans: string[];
    };
}

interface SolutionType {
    modules?: string[];
    handleSelect?: (val: string) => void;
    toolsValues?: string[];
    handleSelectTools?: (val: string) => void;
    isLoading?: boolean;
}

interface PropsCreate extends SolutionType {
    userValue: string;
    handleOptionChange: (value: 'team' | 'personal') => void;
    form: Dict;
    formValidation?: Dict;
    step: number;
    handlePrevious: () => void;
    handleNext: () => void;
}
type QrCodeShape = 'squares' | 'dots' | 'fluid' | undefined;
export type EyeRadiusType = [
    { outer: number; inner: number },
    { outer: number; inner: number },
    { outer: number; inner: number }
];

interface QrCodeInterface {
    step?: number;
    saveModal?: boolean;
    setSaveModal?: Dispatch<SetStateAction<boolean>>;
    handleTabChange?: Dispatch<SetStateAction<string>>;
}

export interface PropsColor extends QrCodeInterface {
    handleColorClick: (val: string) => void;
    setBgColor?: Dispatch<SetStateAction<string>>;
    bgColor?: string;
    setBtnColor?: Dispatch<SetStateAction<string>>;
    btnColor?: string;
    setSelectedFrame?: Dispatch<SetStateAction<number>>;
    selectedFrame?: number;
    handleTabChange?: Dispatch<SetStateAction<string>>;
}

export interface QrCodeFrameType {
    bgColor?: string | undefined;
    selectedColor: string | undefined;
    btnColor?: string | undefined;
    qrCodeName?: string | undefined;
    qrCodeLogo?: string;
    qrCodeShape?: QrCodeShape;
    eyeRadius?: EyeRadiusType;
    cancelModal?: () => void;
}
export interface CommonProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export interface WorkspaceLayoutProps extends CommonProps {
    header?: ReactNode | ReactNode[];
}

export type RoutePaths = {
    login: string;
    signUp: string;
    welcome: string;
    verify: string;
    workspace: string;
};

export interface PostInterface {
    id: string;
    title: string;
    images: string;
    color: string;
    text: string;
    timeline: string;
    objectData: { text: string; color: string }[];
}
export interface DomainsTypes {
    setShowModal?: Dispatch<SetStateAction<boolean>>;
    showModal?: boolean;
    handleModalShow: (open: boolean) => void;
    setCnModal?: Dispatch<SetStateAction<boolean>>;
    cnModal?: boolean;
    handleModalCn: (open: boolean) => void;
    selectedTabIndex: number;
    setSelectedTabIndex: Dispatch<SetStateAction<number>>;
    handleTabClick: (tab: number) => void;
    findAllDomainsResponse: DomainNameSpace.Domain[];
}
export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}

interface PostContentProps {
    postText: string;
    handleTextChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    selectedImages?: File[] | undefined;
    setSelectedImages?: React.Dispatch<React.SetStateAction<File[]>> | undefined;
    handleOpen?: (open: boolean, modalType: string) => void;
    setPostText?: React.Dispatch<React.SetStateAction<string>>;
}

type SocialPost = {
    channels: string | string[];
    status: 'Published' | 'Scheduled' | 'Failed' | 'Draft';
    post: string;
    date: string;
    label: string | string[];
    author: string;
};
export type EventParam = {
    id: string;
    title: string;
    start: string;
    eventColor: string;
    end?: string;
    type?: string;
};
export type SelectedEvent = EventParam & { type: 'NEW' | 'EDIT' };

interface SocialMedia {
    id: string;
    default_img: string[];
    name: string;
    isActive: boolean;
}
export type GeoTarget = { region: string; url: string };
export type ModalType = 'deleteModal' | 'duplicateModal' | 'qrCodeModal' | 'archiveModal' | 'shareModal' | null;
interface QrCodeHeaderTypes {
    label: string;
    description: string;
    isVisible: boolean;
    toggleVisibility: () => void;
    titleValue: string;
    descriptionValue: string;
    handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedImage: string | null;
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ContactActions {
    name: string;
    icon: any;
}
