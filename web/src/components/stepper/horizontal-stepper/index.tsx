/** @format */

import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ step }: { step: any }) => {
    return (
        <div className="">
            <div className="mx-auto p-4  sm:w-full ">
                <div className="flex items-center w-full">
                    <div className="flex items-center text-muted-grey relative">
                        <div
                            className={` ${step === 2 || step === 3 ? 'bg-primary-0 ' : 'border-[#D9D9D9] border-[1.5px] '} rounded-full transition duration-500 ease-in-out h-[16px] w-[16px]  text-white flex justify-center items-center`}
                        >
                            {step === 1 && <div className="bg-primary-0  w-[7px] h-[7px] rounded-full" />}
                            {step === 2 ? (
                                <Check size={8} color="white" className="text-white" />
                            ) : step === 3 ? (
                                <Check size={8} color="white" className="text-white" />
                            ) : null}
                        </div>
                        <h1 className="absolute top-0 -ml-14 text-center mt-8  w-32 text-sm  font-medium  text-black">
                            URL
                        </h1>
                    </div>
                    <div
                        className={`flex-auto border-t-[2px] transition duration-500 ease-in-out  ${step === 2 || step === 3 ? 'border-primary-0' : 'border-[#F1F1F1]'} `}
                    ></div>
                    <div className="flex items-center text-white relative">
                        <div
                            className={`rounded-full transition duration-500 ease-in-out h-[16px] w-[16px]  ${
                                step === 1
                                    ? 'border-[1.5px] '
                                    : step === 2
                                      ? ' border-[1.5px] '
                                      : step === 3
                                        ? 'bg-primary-0 '
                                        : ''
                            }  flex justify-center items-center `}
                        >
                            {step === 2 && <div className="bg-black w-[7px] h-[7px] rounded-full" />}
                            {step === 3 && <Check size={8} />}
                        </div>
                        <h1 className={`absolute top-0 -ml-14 text-center mt-8  w-32 text-sm font-medium  text-black`}>
                            Appearance
                        </h1>
                    </div>
                    <div className="flex-auto border-t-[2px] transition duration-500 ease-in-out border-[#F1F1F1]"></div>
                    <div className="flex items-center  relative">
                        <div
                            className={`rounded-full text-white flex justify-center border-[1.5px]  items-center transition duration-500 ${
                                step === 3 ? '' : ' border-[#D9D9D9] border-muted-grey'
                            }  ease-in-out h-[16px] w-[16px] text-white`}
                        >
                            {step === 3 && <div className="bg-black w-[7px] h-[7px] rounded-full" />}
                        </div>
                        <h1
                            className={`absolute top-0 sm:w-40 mt-8 sm:-ml-20 text-center -ml-2  text-sm  font-medium `}
                        >
                            Done
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
