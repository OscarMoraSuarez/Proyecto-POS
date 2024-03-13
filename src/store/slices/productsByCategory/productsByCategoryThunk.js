import { posApi } from "../../Api/posApi";
import { startLoadingProductsByCategory,setProductsByCategory  } from "./productsByCategorySlice";
export const getProductsByCategory = (page = 0, category) => {
    console.log(category);
     return async (dispatch, getState) => {
        dispatch(startLoadingProductsByCategory());
        try {                                                       
            const { data } = await posApi.get(`/categoria/${category}?page=${page}&size=5&sort=descripcion`);
            console.log(data.content)
            dispatch(setProductsByCategory({
                productsByCategory: data.content,
                page: page + 1

            }))
            return data;
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