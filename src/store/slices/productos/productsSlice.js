import { createSlice } from '@reduxjs/toolkit';
export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        page: 0,
        products: [],
        isLoading: false,
    },
    reducers: {
        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products
        }
    }
})
export const { startLoadingProducts, setProducts } = productsSlice.actions