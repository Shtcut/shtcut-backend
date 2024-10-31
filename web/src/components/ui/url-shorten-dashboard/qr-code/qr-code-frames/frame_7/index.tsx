import { qrCodeSelectors } from '@shtcut/redux/slices/qr-code';
import { EyeRadiusType } from '@shtcut/types/types';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import { useSelector } from 'react-redux';
const Frame_7 = () => {
    const selectedColor = useSelector(qrCodeSelectors.selectSelectedColor);
    const qrCodeLogo = useSelector(qrCodeSelectors.selectQrCodeLogo);
    const qrCodeShape = useSelector(qrCodeSelectors.selectQrCodeShape);
    const bgColor = useSelector(qrCodeSelectors.selectBgColor);
    const btnColor = useSelector(qrCodeSelectors.selectBtnColor);
    const qrCodeName = useSelector(qrCodeSelectors.selectQrCodeName);
    const eyeRadius = useSelector(qrCodeSelectors.selectEyeRadius);

    return (
        <div className="w-full flex items-center justify-center h-full flex-1 flex-col">
            <div className={` border-[3.2px]  w-fit rounded-[6px]`} style={{ borderColor: String(bgColor) }}>
                <QRCode
                    id="shtcut-qrcode"
                    value={''}
                    removeQrCodeBehindLogo={true}
                    ecLevel="L"
                    bgColor="white"
                    fgColor={String(selectedColor)}
                    size={90}
                    logoWidth={30}
                    logoHeight={30}
                    logoImage={String(qrCodeLogo)}
                    qrStyle={qrCodeShape as 'squares' | 'dots' | 'fluid'}
                    eyeRadius={eyeRadius as EyeRadiusType}
                />
            </div>
            <div
                className=""
                style={{
                    width: 0,
                    height: 0,
                    borderLeft: '13px solid transparent',
                    borderRight: '13px solid transparent',
                    borderBottom: `12px solid ${String(bgColor)}`
                }}
            ></div>

            <div
                className=" flex  justify-center items-center  w-full h-10 rounded-[6px]  "
                style={{ backgroundColor: String(bgColor) }}
            >
                <p
                    style={{ color: String(bgColor) === '#000000' ? 'white' : String(btnColor) }}
                    className={`text-sm  uppercase`}
                >
                    {qrCodeName ? String(qrCodeName) : 'SCAN ME'}
                </p>
            </div>
        </div>
    );
};

export default Frame_7;
