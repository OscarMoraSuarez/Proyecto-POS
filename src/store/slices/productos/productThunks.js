import { posApi } from "../../Api/posApi";
import { setProducts, startLoadingProducts } from "./productsSlice";
export const getProducts = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingProducts());
        try {
            const { data } = await posApi.get(`/producto?size=20&page=${page}&sort=descripcion`);
            console.log(data.content)
            dispatch(setProducts({
                products: data.content,
                page: page + 1

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
                console.error("Error al obtener productos:", error.message);
                return { data: null, error: { message: 'No se recibió respuesta del servidor' } };

            }else {
                // Otro tipo de error
                console.error('Error:', error.message);
                return { data: null, error: { message: error.message } };
              }

        }
    }}