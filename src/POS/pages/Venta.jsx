import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKart } from '../hooks';
import { enviarVenta } from '../../apiRequests';
import { getProductByCode } from '../../store';
import { ListaCompras } from "../components";


export const Venta = () => {
  const productoCard = useSelector(state => state.productByCode.productByCode)
  const initialProduct = {
    codigoProducto: "",
    precioUnitario: 0,
  }
  
  const [product, setProduct] = useState(initialProduct)
  const dispatch = useDispatch();
  const [productCode, setProductCode] = useState('');

  const {initialSell,venta,setVenta, addProduct, incrementItem, removeProduct, deleteItem } = useKart();
  const { detallesVenta, subTotal, descuento, total } = venta;

  useEffect(() => {
    if (product.codigoProducto && product.precioUnitario) {
      console.log(detallesVenta)
      addProduct(product);
      setProduct(initialProduct); // Restablecer el producto después de agregarlo
    }
  }, [product, addProduct, initialProduct]);

  useEffect(() => {
    seekProduct();
  }, [productCode]);

  const handleInputChange = async ({ target }) => {
    const productCode = target.value;
    //console.log(productCode);
    setProductCode(productCode);
  };


  const seekProduct = () => {
    if (productCode !== "" && productCode.length >= 4) {
      dispatch(getProductByCode(productCode))
        .then(response => {
          if (response && response.error) {
            console.log(response.error);
          } else {
            console.log("desde ventas", response)
            setProduct({
              codigoProducto: response.codigo,
              precioUnitario: response.precioSalida,
            });


          }
        })
        .catch(error => console.log(error))
        .finally(() => {
          //console.log("desde seekproduct:",product);
          setProductCode("");
        });
    }
  }


  const sendSell = async () => {
    console.log("enviando venta")
    await enviarVenta(venta)
    setVenta(
      initialSell
    )
    

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
          <div className="card border-4 border-success" style={{ width: '15rem' }}>
            {(Object.keys(productoCard).length > 0) && <img src={productoCard.imagePath} className="card-img-top mt-2" height={100} alt="Descripción de la imagen" />}

            <div className="card-body">
              <h6 className="card-title">Codigo:{productoCard.codigo}</h6>
              <h6 className="card-title">Descripcion:{productoCard.descripcion}</h6>
              <h5 className="card-text">Precio: ${productoCard.precioSalida}</h5>
              {/* <a href="#" className="btn btn-primary">Botón</a> */}
            </div>
          </div>
          {/*---------------- celda de total---------------------- */}
          <div className='col-sm-9 mt-1 rounded text-center  bg-warning text-light'>
            <h3>Total: ${total}</h3>
          </div>
          <button className='btn btn-success rounded-1 mt-1'
            onClick={sendSell}
          >
            enviar
          </button>


        </div>
        <ListaCompras
          detallesVenta={detallesVenta}
          incrementItem={incrementItem}
          removeProduct={removeProduct}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};
