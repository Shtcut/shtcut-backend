import Image from 'next/image';
import React, { useState } from 'react';
import { BsTelephoneFill, BsEnvelope } from 'react-icons/bs';
import { FaGlobeAfrica } from 'react-icons/fa';
import Template_1 from './template_1';
import Template_2 from './template_2';
import Template_3 from './template_3';

const TemplatesComponent = () => {
    const [activeTemplate, setActiveTemplate] = useState('template_1');

    const handleSelectTemplate = (tem: string) => {
        setActiveTemplate(tem);
    };
    const contactActions = [
        {
            name: 'Phone',
            icon: <BsTelephoneFill size={10} />
        },
        {
            name: 'Email',
            icon: <BsEnvelope size={10} />
        },
        {
            name: 'Website',
            icon: <FaGlobeAfrica size={10} />
        }
    ];

    return (
        <div className="bg-[#F7F7F7] w-full p-4">
            <p className="font-medium my-4 ">Templates</p>
            <section className="flex gap-2 ">
                <Template_1
                    handleSelectTemplate={handleSelectTemplate}
                    contactActions={contactActions}
                    activeTemplate={activeTemplate}
                />
                <Template_2
                    contactActions={contactActions}
                    handleSelectTemplate={handleSelectTemplate}
                    activeTemplate={activeTemplate}
                />
                <Template_3
                    contactActions={contactActions}
                    handleSelectTemplate={handleSelectTemplate}
                    activeTemplate={activeTemplate}
                />
            </section>
        </div>
    );
};

export default TemplatesComponent;
