import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFrame, qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import FramesSelector1 from './frame_selector_1';
import FramesSelector2 from './frame_selector_2';
import FramesSelector3 from './frame_selector_3';
import FramesSelector4 from './frame_selector_4';
import FramesSelector5 from './frame_selector_5';
import FramesSelector6 from './frame_selector_6';
import FramesSelector7 from './frame_selector_7';
import FramesSelector8 from './frame_selector_8';
import FramesSelector9 from './frame_selector_9';

const FramesSelector = () => {
    const dispatch = useDispatch();
    const selectedFrame = useSelector(qrCodeSelectors.selectSelectedFrame) as number | undefined;

    const handleFrameSelect = (frame: number) => {
        dispatch(setSelectedFrame(frame));
    };

    return (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-[16px] w-5/6 gap-x-[20px]">
            <FramesSelector1 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(1)} />
            <FramesSelector2 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(2)} />
            <FramesSelector3 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(3)} />
            <FramesSelector4 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(4)} />
            <FramesSelector5 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(5)} />
            <FramesSelector6 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(6)} />
            <FramesSelector7 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(7)} />
            <FramesSelector8 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(8)} />
            <FramesSelector9 selectedFrame={selectedFrame} onClick={() => handleFrameSelect(9)} />
        </div>
    );
};

export default FramesSelector;
