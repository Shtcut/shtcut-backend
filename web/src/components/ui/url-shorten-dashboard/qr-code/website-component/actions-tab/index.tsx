'use client';

import React, { useState, useEffect } from 'react';
import ColorsQrCode from './colors-component';
import LogosQrCode from './logos-qrcode';
import FramesSelector from '../../qr-code-frames/frame-selector';
import QrCodeShapes from './qrcode-shape';
import PresetTab from '../preset-tab';
import { Card } from '@shtcut-ui/react';
import { useSearchParams } from 'next/navigation';

const ActionQrCodeTab = () => {
    const getParams = useSearchParams();
    const tabParams = getParams.get('tabs');
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    // Initialize the tabs
    const initialTabs = [
        { id: 'frame', label: 'Frame' },
        { id: 'shape', label: 'Shape' },
        { id: 'logo', label: 'Logo' },
        { id: 'colors', label: 'Colors' }
    ];

    const [tabs, setTabs] = useState(initialTabs);

    useEffect(() => {
        if (tabParams === 'vCard') {
            const newTabs = [{ id: 'vCard', label: 'vCard' }, ...initialTabs];
            setTabs(newTabs);
            setSelectedTabIndex(0);
        }
    }, [tabParams]);

    const handleTabClick = (index: number) => {
        setSelectedTabIndex(index);
    };

    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100 ">
            <div className="flex flex-col gap-1">
                <p className="font-medium">Appearance</p>
                <p className="text-xs text-[#433E3F]">Customize style and template</p>
            </div>
            <div className="w-80 mt-4">
                <PresetTab
                    tabs={tabs}
                    selectedTabIndex={selectedTabIndex}
                    onTabClick={handleTabClick}
                    activeTextClassName="text-white"
                />
            </div>
            {tabParams === 'vCard' && (
                <div className="pt-10">
                    {selectedTabIndex === 0 && <ColorsQrCode />}
                    {selectedTabIndex === 1 && <FramesSelector />}
                    {selectedTabIndex === 2 && <QrCodeShapes />}
                    {selectedTabIndex === 3 && <LogosQrCode />}
                    {selectedTabIndex === 4 && <ColorsQrCode selectedTabIndex={selectedTabIndex} />}
                </div>
            )}
            {tabParams !== 'vCard' && (
                <div className="pt-10">
                    {selectedTabIndex === 0 && <FramesSelector />}
                    {selectedTabIndex === 1 && <QrCodeShapes />}
                    {selectedTabIndex === 2 && <LogosQrCode />}
                    {selectedTabIndex === 3 && <ColorsQrCode />}
                </div>
            )}
        </Card>
    );
};

export default ActionQrCodeTab;
