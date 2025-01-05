import useGeneralState from '@shtcut/hooks/general-state';
import useQrCodeState from '@shtcut/hooks/qrcode/index.';
import { EyeRadiusType } from '@shtcut/types/types';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const Frame_2 = () => {
    const { presetColorString, tabParams, borderColor } = useGeneralState();
    const { state } = useQrCodeState();
    return (
        <div className="h-full flex flex-col justify-center">
            <div className={` border-[3.2px]   w-fit rounded-[6px]`} style={{ borderColor: borderColor }}>
                <QRCode
                    id="shtcut-qrcode"
                    value={'https://meet.google.com/landing'}
                    removeQrCodeBehindLogo={true}
                    ecLevel="L"
                    fgColor={tabParams !== 'website' ? state?.presetColor : presetColorString}
                    size={90}
                    logoWidth={30}
                    logoHeight={30}
                    logoImage={String(state?.logo)}
                    qrStyle={state?.qrStyle as 'squares' | 'dots' | 'fluid'}
                    eyeRadius={state?.eyeRadius as EyeRadiusType}
                />
            </div>
            <div className=" h-10 flex rounded-b-[6px] justify-center items-center w-full">
                <p className={`text-sm  uppercase`}>{state?.title ? String(state?.title) : 'SCAN ME'}</p>
            </div>
        </div>
    );
};

export default Frame_2;
