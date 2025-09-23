import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import i18n from '@i18n/i18n';

interface LanguageState {
    locale: string;
}

const initialState: LanguageState = {
    locale: 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLocale(state, action: PayloadAction<string>) {
            state.locale = action.payload;
            // i18n.locale = action.payload; 
        },
    },
});

export const { setLocale } = languageSlice.actions;
export default languageSlice.reducer;
