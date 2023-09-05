import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from '../hooks';
import { getProductById,getAllLocations } from '../helpers';
import { MovementStock, OperationStock, ProductComponent } from '../components';
import './styles/ProductPage.css';

export const ProductPage = () => {
  const allLocations=useMemo(()=>{
    return getAllLocations();
  },[])
  const params=useParams();
  const {id}=params;
  const producto=useMemo(()=>{
    return getProductById(id);
  },[id]);
  
  const {descripcion,precioEntrada,precioSalida,codigo }=producto;
  
  const state={
    producto:producto,
    location:'',
    agregar:'',
    eliminar:''}
 
  const{ form,onInputChange,onResetForm,agregar,eliminar,location}=useForm(state);
  const loudObject=()=>{
    const{ producto,location,agregar }=form;
    putProduct(producto,location,agregar);
    onResetForm(producto,location,agregar);
  }

  return (
    <>
      <ProductComponent producto={producto}/>
     
      {/* inputs de ubicacion */}
      <div className="container">
        <div className="row justify-content-center">
          <OperationStock  producto={producto} allLocations={allLocations}/>
          <br />
          <br />
          <hr className="bg-success"/>
          <MovementStock producto={producto} allLocations={allLocations}/> 
        </div> 
          
      </div>
    </>
  )
}

