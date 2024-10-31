import React from 'react';
import { Card, Label } from '@shtcut-ui/react'; // Adjust based on your UI library
import { Minus, Plus } from 'lucide-react';
import SocialMediaCard from '../multi-link-components/social-network-card';

type SocialNetwork = {
    id: string;
    name: string;
    logoUrl: string;
};

type SocialNetworksCardProps = {
    logos: SocialNetwork[];
    showSection: boolean;
    toggleSection: () => void;
};

const SocialNetworksCard: React.FC<SocialNetworksCardProps> = ({ logos, showSection, toggleSection }) => {
    return (
        <Card className="shadow-sm mt-4 py-4 px-6 border border-gray-100">
            <section className="flex justify-between items-center">
                <Label>Social Networks</Label>
                {showSection ? (
                    <Minus onClick={toggleSection} className="cursor-pointer" />
                ) : (
                    <Plus onClick={toggleSection} className="cursor-pointer" />
                )}
            </section>
            {showSection && (
                <section>
                    <section className="flex flex-wrap gap-2 mt-4 border-b pb-4">
                        {logos.map((data) => (
                            <div key={data.id}>
                                <SocialMediaCard logoUrl={data.logoUrl} title={data.name} onClick={() => {}} />
                            </div>
                        ))}
                    </section>
                </section>
            )}
        </Card>
    );
};

export default SocialNetworksCard;
