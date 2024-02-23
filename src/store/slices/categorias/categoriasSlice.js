import { createSlice } from '@reduxjs/toolkit';
export const categoriasSlice = createSlice({
    name: 'categoriasSlice',
    initialState: {
        categorias:[],
        isLoading:false,
    },
    reducers: {
        startLoadingCategorias: (state) => {
            state.isLoading=true;
        },
        setCategorias:(state,action)=>{
            state.isLoading=false;
            state.categorias=action.payload.categorias
        }
    }
})
export const { startLoadingCategorias, setCategorias } = categoriasSlice.actions