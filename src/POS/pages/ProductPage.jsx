import { useParams } from 'react-router-dom'
import { MovementStock, AddStock, RemoveStock, ProductComponent, ErrorComponent, CargandoComponent } from '../components';
import { getLocations, getCurrentProduct } from '../../store';
import { useSelector, useDispatch } from "react-redux";
import './styles/ProductPage.css';
import { useState, useEffect } from 'react';


export const ProductPage = () => {

  const [error, setError] = useState()
  let product = null;
  const { id } = useParams();
  const { locations } = useSelector(state => state.locations);
  const { currentProduct, isLoading } = useSelector(state => state.currentProduct);
  console.log(isLoading)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProduct(id))
      .then(response => {
        if (response && response.error) {
          setError(response.error.message);
        }
      })
      .catch(error => {
        setError(error.message)
      });
    dispatch(getLocations())
      .then(response => {
        if (response && response.error) {
          setError(response.error.message)
        }
      })
      .catch(error => {
        setError(error.message)
      });
  }, [dispatch]);


  return (
    <>
      {/* Si hay un error, mostramos el componente de error */}
      {error && <ErrorComponent message={error} />}
      {/* Si no hay error y no estamos cargando, mostramos los datos del producto */}
      {!error && !isLoading && (
        <>
          <ProductComponent producto={currentProduct} />
          <div 
          Name="container">
            <div className="row justify-content-center">
              <AddStock producto={currentProduct} locations={locations} />
              <br />
              <hr className="bg-success" />
              <RemoveStock producto={currentProduct} locations={locations} />
            </div>
          </div>
        </>
      )}
      {/* Si estamos cargando, mostramos el componente de carga */}
      {isLoading && <CargandoComponent />}
    </>
  );
}

