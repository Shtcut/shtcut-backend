import { Button } from '@shtcut-ui/react';
import { colors } from '@shtcut/_shared/data';
import useQrCodeColorHooks from '@shtcut/hooks/qr-code-color';
import { qrCodeSelectors, setBgColor, setBtnColor, setSelectedColor } from '@shtcut/redux/slices/qr-code';
import { useSearchParams } from 'next/navigation';

import React, { useState } from 'react';
import ColorPicker from 'react-pick-color';
import { useDispatch, useSelector } from 'react-redux';

const ColorsQrCode = ({ selectedTabIndex }: { selectedTabIndex?: number }) => {
    const dispatch = useDispatch();
    const getParams = useSearchParams();
    const tabParams = getParams.get('tabs');
    const bgColor = useSelector(qrCodeSelectors.selectBgColor);
    const btnColor = useSelector(qrCodeSelectors.selectBtnColor);
    const { action, state, refs } = useQrCodeColorHooks();
    const [isTransparent, setIsTransparent] = useState(bgColor === 'transparent');
    const urlSectionTab = tabParams === 'vCard' && selectedTabIndex !== 4;
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIsTransparent(checked);
        if (bgColor) {
            setBgColor(checked ? 'transparent' : String(bgColor));
        } else {
            setBgColor('transparent');
        }
    };

    const handleBgColorChange = (color: string) => {
        if (!isTransparent) {
            dispatch(setBgColor(color));
        }
    };
    const handleColorSelect = (color: string) => {
        dispatch(setSelectedColor(color));
    };
    const handleBtnColorChange = (color: string) => {
        dispatch(setBtnColor(color));
    };

    return (
        <div>
            <div className="grid grid-cols-6 gap-x-10 w-1/2 gap-y-3">
                {colors.map((color) => (
                    <Button
                        onClick={() => handleColorSelect(color.value)}
                        key={color.id}
                        className="w-[50px] h-[50px]"
                        style={{
                            backgroundColor: color.value
                        }}
                    />
                ))}
            </div>
            <section className="mt-6 rounded-[10px] p-[23px] bg-[#F7F7F7]">
                <h2 className=" font-medium">Border and background color</h2>
                <div className="bg-white mt-4 flex justify-between p-4 lg:p-7">
                    <div className="relative">
                        <p className="text-sm font-medium">{urlSectionTab ? 'Text color' : 'Button color'} </p>
                        <div className="flex border items-center w-52 rounded px-4 h-[42px] justify-between mt-6">
                            <div>{String(btnColor)}</div>

                            <div
                                className="w-6 h-6 rounded-[4px] cursor-pointer"
                                style={{ backgroundColor: String(btnColor) }}
                                onClick={action.toggleColorPicker}
                            />
                        </div>
                        {state.showColorPicker && (
                            <div className="absolute z-10 bottom-16" ref={refs.colorPickerRef}>
                                <ColorPicker
                                    color={String(btnColor)}
                                    onChange={(color) => handleBtnColorChange(color.hex)}
                                />
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <p className="text-sm font-medium">{urlSectionTab ? 'Frame Color' : 'Background color'} </p>
                        <div
                            onClick={action.toggleBgColorPicker}
                            className="flex border items-center w-52 rounded px-4 h-[42px] justify-between mt-6"
                        >
                            <div>{String(bgColor)}</div>
                            <div className="w-6 h-6 rounded-[4px]" style={{ backgroundColor: String(bgColor) }} />
                        </div>
                        {state.showBgColorPicker && (
                            <div className="absolute z-10 bottom-16" ref={refs.bgColorPickerRef}>
                                <ColorPicker
                                    color={String(bgColor)}
                                    onChange={(color) => handleBgColorChange(color.hex)}
                                />
                            </div>
                        )}
                        <div className="flex items-center gap-x-2 mt-2">
                            <input type="checkbox" checked={isTransparent} onChange={handleCheckboxChange} />{' '}
                            <span className="text-xs">Transparent Background</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ColorsQrCode;
