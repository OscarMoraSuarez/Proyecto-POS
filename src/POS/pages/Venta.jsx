import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useKart } from '../hooks';
import { getProductByCode } from '../../store';
import { ListaCompras } from "../components";





export const Venta = () => {

  const dispatch = useDispatch();
  const [productCode, setProductCode] = useState('');
  const { listaCompras, total, addProduct, incrementItem, removeProduct, deleteItem } = useKart();

  useEffect(() => {
    if (productCode !== "") {
      dispatch(getProductByCode(productCode))
        .then(response => {
          if (response && response.error) {
            console.log(response.error);
          } else {
            addProduct(response);
          }
        })
        .catch(error => console.log(error))
        .finally(() => {
          setProductCode("");
        });
    }
  }, [productCode]);


  const handleInputChange = async ({ target }) => {
    const productCode = target.value;
    console.log(productCode);
    setProductCode(productCode);
  };






  return (
    <div className="container">
      <div className="row mt-2">
        <h4 className="text-center text-warning">Caja</h4>
        <div className="col-sm-12 col-md-3 d-flex flex-column align-items-center">
          <input
            className="form-control"
            type="text"
            placeholder="Escanea el código de barras"
            value={productCode}
            name="productCode"
            onChange={handleInputChange}
          />
          <hr />
          {/*-------------------- Tarjeta del producto---------------*/}
          <div className="card" style={{ width: '12rem' }}>
            <img src="/assets/products/Coca cola lata330ml.jpg" className="card-img-top mt-2" height={100} alt="Descripción de la imagen" />
            <div className="card-body">
              <h6 className="card-title">Codigo:{ }</h6>
              <h5 className="card-title">Descripcion:{ }</h5>
              <h5 className="card-text">Precio: ${ }</h5>
              <h5 className="card-text">Categoria:{ }</h5>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
          {/*---------------- celda de total---------------------- */}
          <div className='col-sm-9 mt-1 rounded text-center  bg-success text-light'>
            <p>Total: ${total}</p>
          </div>


        </div>
        <ListaCompras
          listaCompras={listaCompras}
          incrementItem={incrementItem}
          removeProduct={removeProduct}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};
