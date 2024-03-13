import { posApi } from "../store/Api/posApi";

export const eliminarProductoById = async (code) => {

    try {
        const response = await posApi.delete(`/producto/codigo/${codigo}`);
        const data = response.data;
        console.log('Producto eliminado exitosamente:', response.data);
        return { data: response.data, error: null };
    } catch (error) {

        if (error.response) {
            // El servidor respondió con un código de estado diferente de 2xx
            console.error('Código de estado:', error.response.status);
            console.error('Respuesta del servidor:', error.response.data);
            return { data: null, error: { status: error.response.status, data: error.response.data } };

        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor');
            return { data: null, error: { message: 'No se recibió respuesta del servidor' } };
        } else {
            // Otro tipo de error
            console.error('Error:', error.message);
            return { data: null, error: { message: error.message } };
        }
    }


}
