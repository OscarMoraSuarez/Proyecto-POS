import { posApi } from "../../Api/posApi";
import { startLoadingCategorias, setCategorias } from "./categoriasSlice";

export const getCategorias = () => {
    return async (dispatch) => {
        dispatch(startLoadingCategorias());
        try {
            const { data } = await posApi.get(`/categoria`)
            dispatch(setCategorias({
                categorias: data.content
            }))
        } catch (error) {
            console.error("Error al obtener categorías:", error.message);
        }
    }
}