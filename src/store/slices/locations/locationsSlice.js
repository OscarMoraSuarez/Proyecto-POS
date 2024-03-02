import { createSlice } from '@reduxjs/toolkit';
export const locationsSlice = createSlice({
    name: 'locationsSlice',
    initialState: {
        locations:[],
        isLoading:false,
    },
    reducers: {
        startLoadingLocations: (state) => {
            state.isLoading=true;
        },
        setLocations:(state,action)=>{
            state.isLoading=false;
            state.locations=action.payload.locations
        }
    }
})
export const { startLoadingLocations, setLocations } = locationsSlice.actions