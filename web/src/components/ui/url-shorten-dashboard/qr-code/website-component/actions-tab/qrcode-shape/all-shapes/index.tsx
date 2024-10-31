import { setEyeRadius } from '@shtcut/redux/slices/qr-code';
import React from 'react';
import ColorPicker from 'react-pick-color';
import { useDispatch } from 'react-redux';

type IProps = {
    showColorPicker: boolean;
    setShowColorPicker: (color: boolean) => void;
    colorPickerRef: any;
};

const AllShapes = ({ setShowColorPicker, showColorPicker, colorPickerRef }: IProps) => {
    const dispatch = useDispatch();
    const handleClickEyeRadius = (outer: number, inner: number) => {
        dispatch(
            setEyeRadius([
                { outer, inner },
                { outer, inner },
                { outer, inner }
            ])
        );
    };
    return (
        <div>
            <section className="flex bg-white items-center mt-6 p-5 gap-5 rounded-[10px] ">
                <div
                    onClick={() => handleClickEyeRadius(0, 0)}
                    className="bg-[#fafafa]   cursor-pointer rounded-[10px] border border-[#E3E3E3] flex justify-center items-center w-20 h-20"
                >
                    <div className="border-8 w-12 h-12 border-black flex justify-center mx-auto items-center">
                        <div className="bg-black  w-5 h-5" />
                    </div>
                </div>

                <div
                    onClick={() => handleClickEyeRadius(8, 4)}
                    className="bg-[#fafafa]   cursor-pointer rounded-[10px] border border-[#E3E3E3] flex justify-center items-center w-20 h-20"
                >
                    <div className="border-8 w-12 h-12 border-black rounded-2xl flex justify-center mx-auto items-center">
                        <div className="bg-black rounded-full  w-5 h-5" />
                    </div>
                </div>
                <div
                    onClick={() => handleClickEyeRadius(50, 50)}
                    className="bg-[#fafafa]  cursor-pointer rounded-[10px] border border-[#E3E3E3] flex justify-center items-center w-20 h-20"
                >
                    <div className="border-8 w-12 h-12 border-black rounded-full flex justify-center mx-auto items-center">
                        <div className="bg-black rounded-full  w-5 h-5" />
                    </div>
                </div>

                <div className="relative px-6">
                    <p className="text-sm font-medium">Background color</p>
                    <div
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="flex border items-center w-52 rounded  px-4 h-[42px] justify-between mt-2"
                    >
                        <div>{'#00000'}</div>
                        <div className="w-6 h-6 rounded-[4px]" style={{ backgroundColor: 'black' }} />
                    </div>
                    {showColorPicker && (
                        <div ref={colorPickerRef} className="absolute z-10 bottom-16">
                            <ColorPicker />
                        </div>
                    )}
                    <div className="flex items-center gap-x-2 mt-2">
                        <input type="checkbox" /> <span className="text-xs">Transparent Background</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllShapes;
