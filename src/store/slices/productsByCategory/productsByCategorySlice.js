import { createSlice } from '@reduxjs/toolkit';
export const productsByCategorySlice = createSlice({
    name: 'productsByCategorySlice',
    initialState: {
        page:0,
        productsByCategory:[],
        isLoadig:false
    },
    reducers: {
        startLoadingProductsByCategory: state => {
            isloading: true    
        },
        
        setProductsByCategory: (state, action) => {
            state.productsByCategory = action.payload.productsByCategory
        }
    }
})
export const { startLoadingProductsByCategory, setProductsByCategory } = productsByCategorySlice.actions