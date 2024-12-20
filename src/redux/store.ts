import { configureStore } from '@reduxjs/toolkit';
import contatoReducer from './contatoSlice';

export const store = configureStore({
    reducer: {
        contato: contatoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;