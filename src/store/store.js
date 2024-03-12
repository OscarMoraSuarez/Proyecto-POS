import { configureStore } from '@reduxjs/toolkit';
import { locationsSlice } from './slices';
import { categoriasSlice } from './slices';
import { productsSlice } from './slices';
import { currentProductSlice } from "./slices";
import { errorSlice } from './slices';
import { productByCode } from './slices';
export default configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    productos: productsSlice.reducer,
    locations:locationsSlice.reducer,
    currentProduct:currentProductSlice.reducer,
    error:errorSlice.reducer,
    productByCode:productByCode.reducer
  },
  
});
