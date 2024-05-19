import React from 'react'
import { } from '../components/';
import { useNavigate } from 'react-router-dom';

export const Administrar = () => {
  const navigate = useNavigate();
  const handleNavigateVentas = () => {
    navigate(`/ventas/`,{replace:false});
  }
  const handleNavigateFiltro=()=>{
    navigate(`/filtro/`,{replace:false});
  }
  return (
    <>
      <div 
        style={{cursor:"pointer"}}
        className='alert alert-dismissible alert-success mt-1'
        onClick={handleNavigateVentas}
        >
        <strong>Ventas por mes</strong> 
      </div>
      <div 
        style={{cursor:"pointer"}}
        className='alert alert-dismissible alert-warning mt-1'
        onClick={handleNavigateFiltro}
        >
        <strong>Filtrar por numero de venta</strong> 
      </div>
      <div 
        style={{cursor:"pointer"}}
        className='alert alert-dismissible alert-info mt-1'
        onClick={handleNavigateVentas}
        >
        <strong>Productos mas vendidos</strong> 
      </div>
    </>
  )
}
