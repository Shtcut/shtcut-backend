'use client';
import React, { useState } from 'react';

import { qrCodeSelectors, setImage, setQrCodeName } from '@shtcut/redux/slices/qr-code';
import { useDispatch, useSelector } from 'react-redux';
import QrCodeCardHeader from '../../qr-code-component/qr-code-tab-header';
import QrCodeContactInfo from '../qrcode-contact-info';
import QrCodeCompanyInfo from '../qr-code-company-info';
import SocialNetworksCard from '../../social-media-component';
import { logos } from '@shtcut/_shared/data';
const PersonalInfoVCard = () => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const dispatch = useDispatch();
    const [showSections, setShowSections] = useState({
        header: true,
        contact: true,
        company: true,
        socialNetworks: true
    });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

    const toggleSection = (section: keyof typeof showSections) => {
        setShowSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <div>
            <QrCodeCardHeader
                label="Basic Information"
                description="Enter Name and title"
                isVisible={showSections.header}
                toggleVisibility={() => toggleSection('header')}
                titleValue={qrCodeName as string}
                descriptionValue={''}
                handleTitleChange={handleInputChange}
                handleDescriptionChange={() => {}}
                selectedImage={selectedImage}
                handleImageChange={handleImageChange}
            />
            <QrCodeContactInfo isVisible={showSections.contact} toggleVisibility={() => toggleSection('contact')} />
            <QrCodeCompanyInfo isVisible={showSections.company} toggleVisibility={() => toggleSection('company')} />
            <SocialNetworksCard
                logos={logos}
                showSection={showSections.socialNetworks}
                toggleSection={() => toggleSection('socialNetworks')}
            />
        </div>
    );
};

export default PersonalInfoVCard;
