import { useMemo, useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom'
import { MovementStock, OperationStock, ProductComponent } from '../components';
import { getLocations, getProducts } from '../../store';
import { useSelector, useDispatch } from "react-redux";
import './styles/ProductPage.css';
const Cargando = () => {
  <>
    <div className=' bg-success'>
      <h1>Cargando...</h1>
    </div>
  </>
}
export const ProductPage = () => {
  let product = null;
  const { id, ...rest } = useParams();
  const { locations } = useSelector(state => state.locations);
  const { products } = useSelector(state => state.productos);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = dispatch(getProducts());
        if (productsResponse.error) {
          throw new Error(productsResponse.error.message);
        }

        const locationsResponse = dispatch(getLocations());
        if (locationsResponse.error) {
          throw new Error(locationsResponse.error.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);

      }
    };
    fetchData();
  }, [dispatch]);

  const getProductById = (id) => {
    return products.find(producto => producto.productoId == id);
  }
  if (products) {
    product = getProductById(id);
    console.log(product);
  }


  return (
    <>
      {(product ? <ProductComponent producto={product} /> : <Cargando />)}
      <div className="container">
        <div className="row justify-content-center">
          {(product && locations)?<OperationStock producto={product} locations={locations} />:<Cargando/>}
          <br />
          <br />
          <hr className="bg-success" />
          {(product && locations)?<MovementStock producto={product} allLocat	locations={locations}/>:<Cargando/>}
        </div>
      </div>
    </>
  )
}

