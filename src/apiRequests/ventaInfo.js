import { posApi } from "../store/Api/posApi";


export const getSellInfo = async (numeroVenta) => {
    try {
        const response = await posApi.get(`/venta/${numeroVenta}`);
        console.log("response",response)
        const ventas = response.data;
        console.log('Ventas:', ventas);
        return ventas;
    } catch (error) {
        console.error('Error al obtener la venta:', error);
        throw error; // Lanza el error para manejarlo en el contexto que llame a esta función
    }


}
