import { configureStore } from '@reduxjs/toolkit';

import { categoriasSlice } from './slices';
import { productsSlice } from './slices';

export default configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    productos: productsSlice.reducer,
  },
  
});
