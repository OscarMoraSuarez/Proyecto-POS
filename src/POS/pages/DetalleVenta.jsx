import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailsBySellNumber } from "../../apiRequests/ventaDetalleRequest";
import { InfoDetalle, InfoVenta } from '../components';

export const DetalleVenta = () => {
    const params=useParams();
    const {numeroVenta}=params;
    
  
 


  return (
    <>
      <div className='text-center'>
        <InfoVenta numeroVenta={numeroVenta}/>
       <hr />
       <InfoDetalle numeroVenta={numeroVenta}/>
      </div>
    </>
  )
}
