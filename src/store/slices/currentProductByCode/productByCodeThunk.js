import { posApi } from "../../Api/posApi";
import { setProductByCode,startLoadingProductByCode } from "./productByCodeSlice";
export const getProductByCode = (code) => {
    return async (dispatch) => {
        console.log("desde thunk :",code);
        dispatch(startLoadingProductByCode());   
        try {                                                         
            
            const { data } = await posApi.get(`/producto/codigo/${code}`);
            console.log("Received product data:", data);
            dispatch(setProductByCode(data));
            return data;
            
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de estado diferente de 2xx
                //dispatch(setProductByCode(null));
                console.error('Código de estado:', error.response.status);
                console.error('Respuesta del servidor:', error.response.data);
                return { error: error.response.data }

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