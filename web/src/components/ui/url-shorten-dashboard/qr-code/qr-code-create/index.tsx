import { Button, Modal, Tabs, TabsContent, TabsList, TabsTrigger } from '@shtcut-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { QrCodeInterface } from '@shtcut/types/types';
import Image from 'next/image';
import DownloadBtn from './download-btn';
import { Link, List } from 'lucide-react';
import { PiFilePdfDuotone, PiIdentificationCard } from 'react-icons/pi';
import WebsiteComponent from '../website-component';
import { useSelector } from 'react-redux';
import { nextStep, prevStep, qrCodeSelectors, resetState } from '@shtcut/redux/slices/qr-code';
import FrameComponents from './qr-code-frames';
import MultiLinksComponent from '../multi-link-components';
import QrCodePreviewPhones from './qr-code-phones';
import { useDispatch } from 'react-redux';
import PdfQrCodeComponent from '../pdf-qr-code';
import VCardComponent from '../vcard-component';
import { useRouter, useSearchParams } from 'next/navigation';

const QRCodeCreateComponent = ({ saveModal, setSaveModal }: QrCodeInterface) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const getParams = useSearchParams();
    const tabParams = getParams.get('tabs');
    const step = useSelector(qrCodeSelectors.selectStep);
    const selectedColor = useSelector(qrCodeSelectors.selectSelectedColor);
    const btnColor = useSelector(qrCodeSelectors.selectBtnColor);
    const bgColor = useSelector(qrCodeSelectors.selectBgColor);
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const qrCodeLogo = useSelector(qrCodeSelectors.selectQrCodeLogo);
    const selectedFrame = useSelector(qrCodeSelectors.selectSelectedFrame);
    const qrCodeShape = useSelector(qrCodeSelectors.selectQrCodeShape);
    const eyeRadius = useSelector(qrCodeSelectors.selectEyeRadius);
    const image = useSelector(qrCodeSelectors.selectImage);
    const initialTab = tabParams ? (tabParams as string) : 'website';
    const [switchTab, setSwitchTab] = useState<string>(initialTab);
    const qrCodeRef = useRef(null);
    const handleTabChange = (tabs: string) => {
        setSwitchTab(tabs);
        dispatch(resetState());
    };

    const handleNextStep = () => {
        dispatch(nextStep());
    };

    const handlePrevStep = () => {
        dispatch(prevStep());
    };
    const handleSave = () => {
        setSaveModal(true);
        const qrCodeData = {
            step,
            selectedColor,
            btnColor,
            bgColor,
            qrCodeName,
            qrCodeLogo,
            selectedFrame,
            qrCodeShape,
            eyeRadius,
            image
        };
    };
    const tabData = [
        {
            value: 'website',
            label: 'Website URL',
            icon: <Link size={16} />
        },
        {
            value: 'multi',
            label: 'Multi links',
            icon: <List size={18} />
        },
        {
            value: 'pdf',
            label: 'PDF',
            icon: <PiFilePdfDuotone size={18} />
        },
        {
            value: 'vCard',
            label: 'vCard ',
            icon: <PiIdentificationCard size={18} />
        }
    ];

    useEffect(() => {
        if (switchTab) {
            router.push(`?tabs=${switchTab}`, {
                shallow: true
            } as any);
        }
    }, [switchTab]);

    return (
        <div className=" ">
            <div className="flex justify-between  items-center">
                <h1 className="font-semibold text-[#2B2829] text-xl">Create QR Codes</h1>
                <div className="flex items-center gap-x-3">
                    {Number(step) > 1 && (
                        <Button
                            onClick={handlePrevStep}
                            className="flex justify-center w-28 items-center h-8 text-xs rounded gap-x-2"
                            variant={'outline'}
                        >
                            Back
                        </Button>
                    )}

                    <Button
                        onClick={() => {
                            if (step && Number(step) > 2) {
                                handleSave();
                            } else if (handleNextStep) {
                                handleNextStep();
                            }
                        }}
                        className="bg-primary-0 flex justify-center w-28 h-8 text-xs rounded items-center gap-x-2"
                    >
                        {step && Number(step) > 2 ? 'Save' : ' Next'}
                    </Button>
                </div>
            </div>
            <div className="flex mt-[22px] gap-7">
                <div className="w-full">
                    <div className="">
                        <div>
                            <Tabs
                                defaultValue={switchTab}
                                className="w-full"
                                onValueChange={(value) => {
                                    setSwitchTab(value);
                                }}
                            >
                                <TabsList className="block border-none bg-transparent gap-0 m-0 p-0">
                                    <section className="bg-white shadow-sm border border-gray-100 rounded-[10px] p-[23px]">
                                        <h2 className="font-medium mb-[22px] text-[#151314]">Select QR Code Type</h2>
                                        <section className="w-full gap-x-[10px] flex flex-1">
                                            {tabData.map((tab) => (
                                                <TabsTrigger
                                                    key={tab.value}
                                                    className="border shadow-none text-black/60 h-9 w-32 data-[state=active]:text-primary-0 data-[state=active]:border-primary-0 text-xs flex items-center justify-center gap-x-2 data-[state=active]:shadow-none"
                                                    value={tab.value}
                                                    onClick={() => handleTabChange(tab.value)}
                                                >
                                                    {tab.icon}
                                                    {tab.label}
                                                </TabsTrigger>
                                            ))}
                                        </section>
                                    </section>
                                </TabsList>
                                <div className="mt-32">
                                    <TabsContent value="website">
                                        <WebsiteComponent step={Number(step)} />
                                    </TabsContent>
                                    <TabsContent value="multi">
                                        <MultiLinksComponent step={step} />
                                    </TabsContent>
                                    <TabsContent value="pdf">
                                        <PdfQrCodeComponent step={Number(step)} />
                                    </TabsContent>
                                    <TabsContent value="vCard">
                                        <VCardComponent step={step} />
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-1/2 sticky top-0 shadow-sm border border-gray-100 rounded-[10px] h-[640px] p-[23px]">
                    <h2 className=" font-semibold ">Preview</h2>
                    <QrCodePreviewPhones switchTab={switchTab} />
                </div>
            </div>
            <Modal
                setShowModal={setSaveModal}
                showModel={saveModal}
                onClose={() => setSaveModal(false)}
                className=" bg-gray-50  p-4"
            >
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-center gap-2">
                        {qrCodeLogo ? <Image src={qrCodeLogo as string} width={50} height={50} alt="qr-code" /> : null}
                        <p className="font-semibold ">Download QR Code</p>
                    </div>
                    <div className="w-fit h-40" ref={qrCodeRef}>
                        <FrameComponents />
                    </div>
                    <div className="flex mt-10 items-center w-full gap-4">
                        <Button variant={'outline'} className="w-full h-8 text-xs" onClick={() => setSaveModal(false)}>
                            Cancel
                        </Button>
                        <DownloadBtn qrCodeRef={qrCodeRef} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default QRCodeCreateComponent;
