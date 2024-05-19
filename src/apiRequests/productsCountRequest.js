import { posApi } from "../store/Api/posApi";


export const obtenerConteoProductos = async () => {
    try {
        const response = await posApi.get('/producto/count');
        console.log("desde el request 1", response);
        const { data }=response;
        console.log(response);


        return data; // Conteo total de productos
      } catch (error) {
        console.error('Error al obtener el conteo de productos:', error);
        return null;
      }
}
