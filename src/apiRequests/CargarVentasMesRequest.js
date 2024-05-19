import React from 'react'
import { posApi } from '../store/Api/posApi';

export const CargarVentasMesRequest =async (mes, anio) => {
    try {
        const response = await posApi.get(`venta/filtrar?mes=${mes}&anio=${anio}`);
        
        if(response.status==200){
          return response;
        }else{
          return response.status
        }
      } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error('Error al cargar las ventas:', error.message);
        // Devuelve un arreglo vacío en caso de error
        return [];
      }
}
