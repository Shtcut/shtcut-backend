import React from 'react';
import { Frame_5, Frame_1, Frame_8, Frame_2, Frame_6, Frame_9, Frame_7, Frame_3, Frame_4 } from '../../qr-code-frames';
import { useSelector } from 'react-redux';
import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';

const FrameComponents = () => {
    const selectedFrame = useSelector(qrCodeSelectors.selectSelectedFrame);

    const FrameComponents = () => {
        switch (selectedFrame) {
            case 1:
                return <Frame_1 />;
            case 2:
                return <Frame_2 />;
            case 3:
                return <Frame_3 />;
            case 4:
                return <Frame_4 />;
            case 5:
                return <Frame_5 />;
            case 6:
                return <Frame_6 />;
            case 7:
                return <Frame_7 />;
            case 8:
                return <Frame_8 />;
            case 9:
                return <Frame_9 />;
            default:
                return <Frame_5 />;
        }
    };

    return <>{FrameComponents()}</>;
};

export default FrameComponents;
