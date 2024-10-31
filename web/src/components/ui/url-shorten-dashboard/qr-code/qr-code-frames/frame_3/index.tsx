import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import { useSelector } from 'react-redux';
import { EyeRadiusType } from '@shtcut/types/types';
const Frame_3 = () => {
    const selectedColor = useSelector(qrCodeSelectors.selectSelectedColor);
    const qrCodeLogo = useSelector(qrCodeSelectors.selectQrCodeLogo);
    const qrCodeShape = useSelector(qrCodeSelectors.selectQrCodeShape);
    const bgColor = useSelector(qrCodeSelectors.selectBgColor);
    const btnColor = useSelector(qrCodeSelectors.selectBtnColor);
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const eyeRadius = useSelector(qrCodeSelectors.selectEyeRadius);

    return (
        <div className="flex flex-col justify-center items-center flex-1 h-full  w-full">
            <div className="flex justify-center items-center   relative ">
                {/* Top Left */}
                <div className="absolute top-0 left-0 w-16 h-16" style={{ backgroundColor: 'transparent' }}>
                    <div
                        className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 "
                        style={{ borderColor: String(bgColor) }}
                    ></div>
                </div>
                {/* Top Right */}
                <div style={{ backgroundColor: 'transparent' }} className="absolute top-0 right-0 w-16 h-16">
                    <div
                        className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 "
                        style={{ borderColor: String(bgColor) }}
                    ></div>
                </div>
                {/* Bottom Left */}
                <div style={{ backgroundColor: 'transparent' }} className="absolute bottom-0 left-0 w-16 h-16">
                    <div
                        className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 "
                        style={{ borderColor: String(bgColor) }}
                    ></div>
                </div>
                {/* Bottom Right */}
                <div style={{ backgroundColor: 'transparent' }} className="absolute bottom-0 right-0 w-16 h-16">
                    <div
                        className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 "
                        style={{ borderColor: String(bgColor) }}
                    ></div>
                </div>
                {/* Center Text */}
                <div className="absolute ">
                    <QRCode
                        id="shtcut-qrcode"
                        value={''}
                        removeQrCodeBehindLogo={true}
                        ecLevel="L"
                        fgColor={String(selectedColor)}
                        size={90}
                        logoWidth={30}
                        logoHeight={30}
                        logoImage={String(qrCodeLogo)}
                        // qrStyle="dots"
                        eyeRadius={eyeRadius as EyeRadiusType}
                        qrStyle={qrCodeShape as 'squares' | 'dots' | 'fluid'}
                    />
                </div>
            </div>
            <div className="relative top-20">
                <p style={{ color: btnColor ? String(btnColor) : 'white' }} className={`text-sm uppercase`}>
                    {qrCodeName ? String(qrCodeName) : 'SCAN ME'}
                </p>
            </div>
        </div>
    );
};

export default Frame_3;
