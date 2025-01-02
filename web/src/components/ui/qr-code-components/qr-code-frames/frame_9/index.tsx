import useGeneralState from '@shtcut/hooks/general-state';
import useQrCodeState from '@shtcut/hooks/qrcode/index.';
import { EyeRadiusType } from '@shtcut/types/types';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const Frame_9 = () => {
    const { presetColorString, tabParams, borderColor } = useGeneralState();
    const { state } = useQrCodeState();
    return (
        <div className="h-full flex flex-col justify-center">
            <div
                className=" h-11 flex rounded-t-[6px] justify-center items-center w-full"
                style={{ backgroundColor: borderColor }}
            >
                <p className={`text-sm  uppercase`}>{state?.title ? String(state?.title) : 'My qrcode'}</p>
            </div>
            <div className={` border-[3.2px]   w-fit rounded-b-[6px]`} style={{ borderColor: borderColor }}>
                <QRCode
                    id="shtcut-qrcode"
                    value={''}
                    removeQrCodeBehindLogo={true}
                    ecLevel="L"
                    fgColor={tabParams === 'multi' ? state?.presetColor : presetColorString}
                    size={90}
                    logoWidth={30}
                    logoHeight={30}
                    eyeColor={''}
                    logoImage={String(state?.logo)}
                    qrStyle={state?.logo as 'squares' | 'dots' | 'fluid'}
                    eyeRadius={state?.eyeRadius as EyeRadiusType}
                />
            </div>
        </div>
    );
};

export default Frame_9;
