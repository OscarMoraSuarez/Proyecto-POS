import { createSlice } from '@reduxjs/toolkit';
export const errorSlice = createSlice({
    name: 'errorSlice',
    initialState: {
        status:null,
        data:null,
        statusText:null,
        headers:null,
        request:null,
        message:null
    },
    reducers: {
        setError: (state,action) => {
             state.data=action.payload.codigo   
             state.codigo=action.payload.codigo
             state.respuesta=action.payload.respuesta
        }
    }
})
export const { setError } = errorSlice.actions