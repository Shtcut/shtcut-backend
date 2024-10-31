// LinksSection.tsx
import { Button, Card, Input, Label } from '@shtcut-ui/react';
import { Image as LucideImage, Minus, Plus } from 'lucide-react';
import React from 'react';

type LinksSectionProps = {
    isVisible: boolean;
    toggleVisibility: () => void;
    linkImage?: string | null;
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LinksSection = ({ isVisible, toggleVisibility, linkImage, handleImageChange }: LinksSectionProps) => {
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100">
            <section className={`flex ${isVisible ? 'pb-3' : ''} justify-between items-center`}>
                <section className="flex flex-col gap-2">
                    <Label>Links</Label>
                    {!isVisible && <p className="text-sm text-[#5A5555]">Enter Title and description</p>}
                </section>
                {isVisible ? (
                    <Minus onClick={toggleVisibility} className="cursor-pointer" />
                ) : (
                    <Plus onClick={toggleVisibility} className="cursor-pointer" />
                )}
            </section>
            {isVisible && (
                <section className="border-t pt-3">
                    <section>
                        <Label>Link 1</Label>
                    </section>
                    <section className="mt-4 flex flex-col gap-4 border-b pb-4">
                        <Input className="" placeholder="Enter Link Title" />
                        <Input className="" placeholder="Enter URL" />
                    </section>
                    <section className="flex flex-col gap-2 pt-4">
                        <Label>Image (optional)</Label>
                        <p className="text-sm text-[#5A5555]">Add image using the + button.</p>
                        <section className="relative bg-[#FAFAFA] mt-2 w-20">
                            <section className="h-20 w-20 rounded-md border flex justify-center items-center">
                                {linkImage ? (
                                    <img
                                        src={linkImage}
                                        alt="Preview"
                                        className="h-full w-full object-cover rounded-md"
                                    />
                                ) : (
                                    <LucideImage color="#B5B3B3" size={40} />
                                )}
                            </section>
                            <label
                                htmlFor="image-upload-link"
                                className="absolute top-0 right-0 bg-black w-6 h-6 flex justify-center items-center cursor-pointer rounded-full"
                            >
                                <Plus color="white" size={16} />
                            </label>
                            <input
                                id="image-upload-link"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </section>
                        <Button variant="outline" className="h-9 w-28 mt-2">
                            Add Link
                        </Button>
                    </section>
                </section>
            )}
        </Card>
    );
};

export default LinksSection;
