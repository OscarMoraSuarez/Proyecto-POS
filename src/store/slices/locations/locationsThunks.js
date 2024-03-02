import { posApi } from "../../Api/posApi";
import { startLoadingLocations, setLocations } from "./locationsSlice";

export const getLocations = () => {
    return async (dispatch) => {
        dispatch(startLoadingLocations());
        try {
            const { data } = await posApi.get(`/ubicacion`)
            console.log(data.content)
            dispatch(setLocations({
                locations: data.content
            }))
        } catch (error) {
            console.error("Error al obtener categorías:", error.message);
        }
    }
}