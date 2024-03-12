import { createSlice } from '@reduxjs/toolkit';
export const currentProductSlice = createSlice({
    name: 'currentProductSlice',
    initialState: {
        currentProduct: {},
        isLoading:false
    },
    reducers: {
        startLoadingCurrentProduct: state => {
            state.isLoading=true
        },
        setCurrentProduct:(state,action)=>{
            state.isLoading = false;
            state.currentProduct=action.payload.currentProduct
        }
        
    }
})
export const { setCurrentProduct , startLoadingCurrentProduct} =currentProductSlice.actions