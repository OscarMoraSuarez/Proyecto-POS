import { posApi } from "../../Api/posApi";
import { setCurrentProduct, startLoadingCurrentProduct } from "./currentProductSlice";
export const getCurrentProduct = (id) => {
    return async (dispatch) => {
        dispatch(startLoadingCurrentProduct());   
        try {                                                         
            const { data } = await posApi.get(`/producto/${id}`);
            console.log( "data:", data)
            dispatch(setCurrentProduct({
                currentProduct: data
            }))
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de estado diferente de 2xx
                console.error('Código de estado:', error.response.status);
                console.error('Respuesta del servidor:', error.response.data);
                return { data: null, error: { status: error.response.status, data: error.response.data } };

            } else if (error.request) {
                // La solicitud fue hecha pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
                console.error("Error al obtener producto:", error.message);
                return { data: null, error: { message: 'No se recibió respuesta del servidor' } };

            }else {
                // Otro tipo de error
                console.error('Error:', error.message);
                return { data: null, error: { message: error.message } };
              }

        }
    }}