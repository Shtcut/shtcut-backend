import { Button, Card, Input, Label } from '@shtcut-ui/react';
import { logos } from '@shtcut/_shared/data';
import { Image as LucideImage, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import SocialMediaCard from '../social-network-card';
import { useDispatch, useSelector } from 'react-redux';
import { qrCodeSelectors, setImage, setQrCodeName } from '@shtcut/redux/slices/qr-code';
import QrCodeCardHeader from '../../qr-code-component/qr-code-tab-header';
import SocialNetworksCard from '../../social-media-component';
import LinksSection from '../link-sections';

const QrCodeHeadersComponent = () => {
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [linkImage, setLinkImage] = useState<string | null>(null);
    const [showSections, setShowSections] = useState({
        header: true,
        links: true,
        socialNetworks: true
    });

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

    const handleImageChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setLinkImage(imageUrl);
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
            {/* Header Section */}
            <QrCodeCardHeader
                label="Header"
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

            {/* Links Section */}
            <LinksSection
                isVisible={showSections.links}
                toggleVisibility={() => toggleSection('links')}
                linkImage={linkImage}
                handleImageChange={handleImageChangeLink}
            />

            <SocialNetworksCard
                logos={logos}
                showSection={showSections.socialNetworks}
                toggleSection={() => toggleSection('socialNetworks')}
            />
        </div>
    );
};

export default QrCodeHeadersComponent;
