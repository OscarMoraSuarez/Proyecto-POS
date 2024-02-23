import { posApi } from "../../Api/posApi";
import { setProducts, startLoadingProducts } from "./productsSlice";
export const getProducts=(page=0)=>{
    return async(dispatch,getState)=>{
        dispatch(startLoadingProducts());

        const {data}=await posApi.get(`/producto?size=20&page=${page}&sort=descripcion`);
        dispatch(setProducts({
            products:data.results,
            page:page+1

        }))
    }
}