import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contato } from '../tipos/types';

const contatoSlice = createSlice({
    name: 'contato',
    initialState: [] as Contato[],
    reducers: {
        addContato: (state, action: PayloadAction<Contato>) => {
            state.push(action.payload);
        },
        removerContato:(state, action: PayloadAction<string>) => {
            return state.filter(contato => contato.id !== action.payload);
        },
        EditContato: (state, action: PayloadAction<Contato>) => {
            const index = state.findIndex(contato => contato.id === action.payload.id);
            if(index !== -1){
                state[index] = action.payload;
            }
        },    
    },
});

export const { addContato, removerContato, EditContato } = contatoSlice.actions;

export default contatoSlice.reducer;