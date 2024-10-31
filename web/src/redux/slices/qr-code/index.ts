// store/qrCodeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@shtcut/redux/store';
import { EyeRadiusType, QrCodeShape } from '@shtcut/types/types';

interface QrCodeState {
    selectedColor: string | null;
    btnColor: string;
    bgColor: string;
    qrCodeName: string;
    qrCodeLogo?: string;
    selectedFrame: number;
    qrCodeShape: QrCodeShape;
    step: number;
    eyeRadius: EyeRadiusType;
    image: string;
}

const initialState: QrCodeState = {
    selectedColor: '#000000',
    btnColor: '#000000',
    bgColor: '#000000',
    qrCodeName: '',
    qrCodeLogo: undefined,
    selectedFrame: 1,
    qrCodeShape: 'squares',
    step: 1,
    image: '',
    eyeRadius: [
        { outer: 8, inner: 4 },
        { outer: 8, inner: 4 },
        { outer: 8, inner: 4 }
    ]
};

const qrCodeSlice = createSlice({
    name: 'qrCode',
    initialState,
    reducers: {
        resetState: (state) => {
            return initialState;
        },
        setSelectedColor: (state, action: PayloadAction<string>) => {
            state.selectedColor = action.payload;
        },
        setBtnColor: (state, action: PayloadAction<string>) => {
            state.btnColor = action.payload;
        },
        setBgColor: (state, action: PayloadAction<string>) => {
            state.bgColor = action.payload;
        },
        setQrCodeName: (state, action: PayloadAction<string>) => {
            state.qrCodeName = action.payload;
        },
        setQrCodeLogo: (state, action: PayloadAction<string | undefined>) => {
            state.qrCodeLogo = action.payload;
        },
        setSelectedFrame: (state, action: PayloadAction<number>) => {
            state.selectedFrame = action.payload;
        },
        setQrCodeShape: (state, action: PayloadAction<QrCodeShape>) => {
            state.qrCodeShape = action.payload;
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step = Math.max(state.step - 1, 1);
        },
        setEyeRadius: (state, action: PayloadAction<EyeRadiusType>) => {
            state.eyeRadius = action.payload;
        }
    }
});

export const {
    setSelectedColor,
    setBtnColor,
    setBgColor,
    setQrCodeName,
    setQrCodeLogo,
    setSelectedFrame,
    setQrCodeShape,
    setEyeRadius,
    setStep,
    nextStep,
    prevStep,
    resetState,
    setImage
} = qrCodeSlice.actions;

export default qrCodeSlice.reducer;
const createSelector =
    <T>(key: keyof QrCodeState) =>
    (state: RootState) =>
        state.qrCode[key];

export const qrCodeSelectors = {
    selectSelectedColor: createSelector('selectedColor'),
    selectBtnColor: createSelector('btnColor'),
    selectBgColor: createSelector('bgColor'),
    selectQrCodeName: createSelector('qrCodeName'),
    selectQrCodeLogo: createSelector('qrCodeLogo'),
    selectSelectedFrame: createSelector('selectedFrame'),
    selectQrCodeShape: createSelector('qrCodeShape'),
    selectStep: createSelector('step'),
    selectEyeRadius: createSelector('eyeRadius'),
    selectImage: createSelector('image')
};
