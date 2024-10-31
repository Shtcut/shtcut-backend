import { Card, Input, Label } from '@shtcut-ui/react';
import { QrCodeHeaderTypes } from '@shtcut/types/types';
import { Image as LucideImage, Minus, Plus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
const QrCodeCardHeader = ({
    label,
    description,
    isVisible,
    toggleVisibility,
    titleValue,
    descriptionValue,
    handleTitleChange,
    handleDescriptionChange,
    selectedImage,
    handleImageChange
}: QrCodeHeaderTypes) => {
    const getParams = useSearchParams();
    const tabParams = getParams.get('tabs');
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100 ">
            <section>
                <section className="flex justify-between ">
                    <section className="flex flex-col gap-2">
                        <Label>{label}</Label>
                        <p className="text-sm text-[#5A5555]">{description}</p>
                    </section>
                    {isVisible ? (
                        <Minus onClick={toggleVisibility} className="cursor-pointer" />
                    ) : (
                        <Plus onClick={toggleVisibility} className="cursor-pointer" />
                    )}
                </section>
                {isVisible && (
                    <section>
                        <section className="mt-4 flex flex-col gap-4 border-b pb-4">
                            <Input
                                placeholder={tabParams === 'vCard' ? 'Enter Full Name' : 'Title'}
                                value={titleValue}
                                onChange={handleTitleChange}
                            />
                            <Input
                                placeholder={
                                    tabParams === 'vCard' ? 'Enter Job description ' : 'Description (optional)'
                                }
                                value={descriptionValue}
                                onChange={handleDescriptionChange}
                            />
                        </section>
                        <section>
                            <section className="flex flex-col gap-2 pt-4">
                                <Label>Image (optional)</Label>
                                <p className="text-sm text-[#5A5555]">Add image using the + button.</p>
                                <section className="relative bg-[#FAFAFA] mt-2 w-20">
                                    <section className="h-20 w-20 rounded-md border flex justify-center items-center">
                                        {selectedImage ? (
                                            <img
                                                src={selectedImage}
                                                alt="Preview"
                                                className="h-full w-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <LucideImage color="#B5B3B3" size={40} />
                                        )}
                                    </section>
                                    <label
                                        htmlFor="image-upload"
                                        className="absolute top-0 right-0 bg-black w-6 h-6 flex justify-center items-center cursor-pointer rounded-full"
                                    >
                                        <Plus color="white" size={16} />
                                    </label>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </section>
                            </section>
                        </section>
                    </section>
                )}
            </section>
        </Card>
    );
};

export default QrCodeCardHeader;
