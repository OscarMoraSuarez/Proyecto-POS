import { posApi } from "../store/Api/posApi";

export const getDetailsBySellNumber = async (numeroVenta, page) => {
  try {

    const response = await posApi.get(`detalles/${numeroVenta}`);
    return response.data; // Devuelve los datos de la respuesta

    
  } catch (error) {
    // Manejo de errores
    if (error.response) {
      console.error('Código de estado:', error.response.status);
      console.error('Respuesta del servidor:', error.response.data);
      return { data: null, error: { status: error.response.status, data: error.response.data } };
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor');
      return { data: null, error: { message: 'No se recibió respuesta del servidor' } };
    } else {
      console.error('Error:', error.message);
      return { data: null, error: { message: error.message } };
    }
  }
};
