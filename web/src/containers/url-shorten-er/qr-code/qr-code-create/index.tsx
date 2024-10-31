import QRCodeCreateComponent from '@shtcut/components/ui/url-shorten-dashboard/qr-code/qr-code-create';
import { EyeRadiusType } from '@shtcut/types/types';
import React, { useState } from 'react';

const QRCodeCreateContainer = () => {
    const [saveModal, setSaveModal] = useState(false);

    return <QRCodeCreateComponent saveModal={saveModal} setSaveModal={setSaveModal} />;
};

export default QRCodeCreateContainer;
