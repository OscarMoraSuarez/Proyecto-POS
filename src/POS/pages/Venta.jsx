import React, { useEffect, useState } from 'react';
import { enviarLista } from '../helpers/enviarLista';
import { getProductByCode } from "../../store";
import { useDispatch } from 'react-redux';




export const Venta = () => {
  
  const dispatch=useDispatch();
  const [productCode, setProductCode] = useState('');
  const [listaCompras, setListaCompras] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    listaCompras.forEach((item) => {
      newTotal += item.cantidad * item.precioSalida;
    });
    setTotal(newTotal);
  }, [listaCompras]);

  const addProduct = (product) => { // Recibe el producto como argumento
    if (product) {
      const existingItem = listaCompras.find((item) => item.codigo === product.codigo);
  
      if (!existingItem) {
        setListaCompras((prevLista) => [
          ...prevLista,
          { ...product, cantidad: 1 }
        ]);
      } else {
        setListaCompras((prevLista) =>
          prevLista.map((item) =>
            item.codigo === existingItem.codigo
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        );
      }
      setProductCode('');
      /* updateTotal(); */
    } else {
      console.log('No se encontró el producto');
    }
  };

  const handleInputChange = async ({ target }) => {
    const productCode = target.value;
    setProductCode(productCode);
    await dispatch(getProductByCode(productCode))
      .then(response => {
        if (response && response.error) {
          console.log(response.error);
        } else {
          console.log(response);
          console.log(typeof(response.precioEntrada));
          console.log(typeof(response.precioSalida));
          addProduct(response); // Pasa el producto obtenido como argumento
        }
      })
      .catch(error => console.log(error)); 
  };
  
  
  
  console.log(listaCompras)
  //incrementar item
  const incrementItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.map((cartItem) =>
        cartItem.codigo === item.codigo
          ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
          : cartItem
      )
    );
    /* updateTotal(); */
  };

  //remover item
  const removeProduct = (item) => {
    if (item.cantidad > 1) {
      setListaCompras((prevLista) =>
        prevLista.map((cartItem) =>
          cartItem.codigo === item.codigo
            ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
            : cartItem
        )
      );
    } else {
      setListaCompras((prevLista) =>
        prevLista.filter((cartItem) => cartItem.codigo !== item.codigo)
      );
    }
    /* updateTotal(); */
  };

  //borrar Item
  const deleteItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.filter((cartItem) => cartItem.codigo !== item.codigo)
    );
    /* updateTotal(); */
  };

  // actualizar suma
  /* const updateTotal = () => {
    setTotal((prevTotal) => {
      let newTotal = prevTotal;
      listaCompras.forEach((item) => {
        newTotal += item.cantidad * item.precioSalida;
      });
      return newTotal;
    });
  }; */

  const transeferirLista = () => {
    // Implementa la lógica para enviar la lista de compras
  };

 console.log(total);

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
          <div className="col-sm-9">
            <button className="btn btn-primary mt-2" onClick={transeferirLista}>cerrar</button>
          </div>

        </div>
        {/*--------------------Lista de compras----------*/}
         <div className="col col-sm-12 col-md-9">
          <ul className="list-group">
            {listaCompras.map((item) => (
              <li key={item.codigo} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    Codigo:{item.codigo}- {item.descripcion} - Cantidad: {item.cantidad} - Subtotal: ${parseFloat(item.cantidad * item.precioSalida)
                    }
                  </div>
                  <div>
                    <button className="btn btn-success" onClick={() => incrementItem(item)}>+</button>
                    <button className="btn btn-warning" onClick={() => removeProduct(item)}>-</button>
                    <button className="btn btn-danger" onClick={() => deleteItem(item)}>X</button>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </div>
  );
};
