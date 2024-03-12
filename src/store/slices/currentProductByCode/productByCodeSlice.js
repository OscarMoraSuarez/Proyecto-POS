import { createSlice } from '@reduxjs/toolkit';
export const productByCode = createSlice({
    name: 'productByCode',
    initialState: {
        isLoading:false,
        productByCode:{

        }
    },
    reducers: {
        startLoadingProductByCode: state => {
            state.isLoading=true
        },
        setProductByCode: (state, action) => {
            state.isLoading = false;
            state.productByCode = action.payload; // Utiliza action.payload directamente
        },
        
    }
})
export const {startLoadingProductByCode,setProductByCode} = productByCode.actions