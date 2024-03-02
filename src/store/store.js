import { configureStore } from '@reduxjs/toolkit';
import { locationsSlice } from './slices';
import { categoriasSlice } from './slices';
import { productsSlice } from './slices';

export default configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    productos: productsSlice.reducer,
    locations:locationsSlice.reducer    
    
  },
  
});
