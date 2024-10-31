import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import AllShapes from './all-shapes';
import { QRCode } from 'react-qrcode-logo';
import { QrCodeShape } from '@shtcut/types/types';
import { useDispatch } from 'react-redux';
import { setQrCodeShape } from '@shtcut/redux/slices/qr-code';

const QrCodeShapes = () => {
    const dispatch = useDispatch();
    const [showColorPicker, setShowColorPicker] = useState(false);
    const colorPickerRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event) => {
        if (colorPickerRef.current && !colorPickerRef.current?.contains(event.target)) {
            setShowColorPicker(false);
        }
    };
    useEffect(() => {
        if (showColorPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showColorPicker]);

    const handleShapeChange = (shape: QrCodeShape) => {
        dispatch(setQrCodeShape(shape));
    };
    return (
        <div>
            <section>
                <div className="h-full items-center gap-4 flex ">
                    <div
                        className={` w-24 h-24 flex justify-center items-center rounded-[10px] cursor-pointer border border-[#E3E3E3] bg-[#fafafa]  `}
                        onClick={() => handleShapeChange('squares')}
                    >
                        <QRCode
                            id="qrcode-shape"
                            value={''}
                            removeQrCodeBehindLogo={true}
                            ecLevel="L"
                            fgColor={'black'}
                            bgColor="#fafafa"
                            size={56}
                            logoWidth={30}
                            logoHeight={30}
                            qrStyle={'squares'}
                        />
                    </div>
                    <div
                        className={` w-24 h-24 flex justify-center items-center rounded-[10px] cursor-pointer  border border-[#E3E3E3] bg-[#fafafa]  `}
                        onClick={() => handleShapeChange('dots')}
                    >
                        <QRCode
                            id="qrcode-shape"
                            value={''}
                            removeQrCodeBehindLogo={true}
                            ecLevel="L"
                            fgColor={'black'}
                            bgColor="#fafafa"
                            size={56}
                            logoWidth={30}
                            logoHeight={30}
                            qrStyle={'dots'}
                        />
                    </div>
                    <div
                        className={` w-24 h-24 flex justify-center items-center rounded-[10px] cursor-pointer  border border-[#E3E3E3] bg-[#fafafa]  `}
                        onClick={() => handleShapeChange('fluid')}
                    >
                        <QRCode
                            id="qrcode-shape"
                            value={''}
                            removeQrCodeBehindLogo={true}
                            ecLevel="L"
                            fgColor={'black'}
                            bgColor="#fafafa"
                            size={56}
                            logoWidth={30}
                            logoHeight={30}
                            qrStyle={'fluid'}
                        />
                    </div>
                </div>
            </section>
            <section className="mt-6 rounded-[10px] p-[23px] bg-[#F7F7F7]">
                <h2 className="font-medium">Corners & Colors</h2>
                <AllShapes
                    colorPickerRef={colorPickerRef}
                    setShowColorPicker={setShowColorPicker}
                    showColorPicker={showColorPicker}
                />
            </section>
        </div>
    );
};

export default QrCodeShapes;
