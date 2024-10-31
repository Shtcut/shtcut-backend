'use client';

import { Button, Card } from '@shtcut-ui/react';
import Stepper from '@shtcut/components/stepper/horizontal-stepper';
import { nextStep, prevStep, qrCodeSelectors, setImage, setQrCodeName } from '@shtcut/redux/slices/qr-code';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QrCodeCardHeader from '../../qr-code/qr-code-component/qr-code-tab-header';
import QrCodePreviewPhones from '../../qr-code/qr-code-create/qr-code-phones';
import LinksSection from '../../qr-code/multi-link-components/link-sections';
import ColorsQrCode from '../../qr-code/website-component/actions-tab/colors-component';
import QrCodeName from '../../qr-code/website-component/qr-code-name';

const CreateLinkBioComponent = () => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const [linkImage, setLinkImage] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const step = useSelector(qrCodeSelectors.selectStep);
    const [showSections, setShowSections] = useState({
        header: true,
        links: true,
        socialNetworks: true
    });
    const handleNextStep = () => {
        dispatch(nextStep());
    };

    const handlePrevStep = () => {
        dispatch(prevStep());
    };
    const handleSave = () => {
        const qrCodeData = {
            step
        };
    };
    const toggleSection = (section: keyof typeof showSections) => {
        setShowSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    const handleImageChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setLinkImage(imageUrl);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQrCodeName(event.target.value));
    };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            dispatch(setImage(imageUrl));
        }
    };
    return (
        <section>
            <div className="flex justify-between  items-center">
                <h1 className="font-semibold text-[#2B2829] text-xl">Edit Link-in-bio</h1>
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
                        {step && Number(step) > 2 ? 'Save Update' : ' Next'}
                    </Button>
                </div>
            </div>
            <section className="flex mt-[22px] gap-7">
                <section className="w-full">
                    <section className="w-full h-[90px]   bg-white rounded-[10px] shadow-sm border border-gray-100 ">
                        <Stepper step={step} />
                    </section>
                    {step === 1 && (
                        <section>
                            <QrCodeCardHeader
                                label="Title"
                                description="Enter Title and description"
                                isVisible={showSections.header}
                                toggleVisibility={() => toggleSection('header')}
                                titleValue={qrCodeName as string}
                                descriptionValue={''}
                                handleTitleChange={handleInputChange}
                                handleDescriptionChange={() => {}}
                                selectedImage={selectedImage}
                                handleImageChange={handleImageChange}
                            />
                            <LinksSection
                                isVisible={showSections.links}
                                toggleVisibility={() => toggleSection('links')}
                                linkImage={linkImage}
                                handleImageChange={handleImageChangeLink}
                            />
                        </section>
                    )}
                    {step === 2 && (
                        <Card className="shadow-sm mt-8 py-4 px-6 border border-gray-100 ">
                            <ColorsQrCode />
                        </Card>
                    )}
                    {step === 3 && (
                        <section className=" mt-4 shadow-sm border border-gray-100  rounded-[10px] gap-2">
                            <QrCodeName />
                        </section>
                    )}
                </section>
                <div className="bg-white w-1/2 sticky top-0 shadow-sm border border-gray-100 rounded-[10px] h-[640px] p-[23px]">
                    <h2 className=" font-semibold ">Preview</h2>
                    <QrCodePreviewPhones switchTab="edit-link" />
                </div>
            </section>
        </section>
    );
};

export default CreateLinkBioComponent;
