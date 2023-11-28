import React, { useState } from 'react';
import { enviarLista } from '../helpers/enviarLista';

const initialProducts = [
  { codigo: '00001', descripcion: 'Producto 1', precio: 10000 },
  { codigo: '00002', descripcion: 'Producto 2', precio: 15000 },
  { codigo: '00003', descripcion: 'Producto 3', precio: 2000 },
];

export const Venta = ({ enviarListaCompras }) => {
  const [scanedCode, setScanedCode] = useState('');
  const [listaCompras, setListaCompras] = useState([]);
  const [total, setTotal] = useState(0);

  const addProduct = (barcode) => {
    const productToAdd = initialProducts.find((product) => product.codigo === barcode);

    if (productToAdd) {
      const existingItem = listaCompras.find((item) => item.codigo === productToAdd.codigo);

      if (!existingItem) {
        setListaCompras((prevLista) => [
          ...prevLista,
          { ...productToAdd, cantidad: 1 }
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
      setScanedCode('');
      updateTotal();
    } else {
      console.log('No se encontró el producto');
    }
    console.log(listaCompras);
  };

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
    updateTotal();
  };

  const deleteItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.filter((cartItem) => cartItem.codigo !== item.codigo)
    );
    updateTotal();
  };

  const incrementItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.map((cartItem) =>
        cartItem.codigo === item.codigo
          ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
          : cartItem
      )
    );
    updateTotal();
  };

  const updateTotal = () => {
    let newTotal = 0;

    listaCompras.forEach((item) => {
      newTotal += item.cantidad * item.precio;
    });

    setTotal(newTotal);
  };

  const handleInputChange = ({ target }) => {
    const barcode = target.value;
    setScanedCode(barcode);
    addProduct(barcode);
  };
  const transeferirLista=()=>{
    enviarLista(listaCompras)
    .then((response) => {
      // Maneja la respuesta del backend si es necesario
      console.log('Lista de compras enviada con éxito:', response);
      // Realiza otras acciones, como limpiar la lista de compras
      setListaCompras([]);
      setTotal(0);
    })
    .catch((error) => {
      // Maneja cualquier error en la solicitud al backend
      console.error('Error al enviar la lista de compras:', error);
    });
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <h4 className="text-center text-warning">Caja</h4>
        <div className="col-sm-12 col-md-3 d-flex flex-column align-items-center">
          <input
            className="form-control"
            type="text"
            placeholder="Escanea el código de barras"
            value={scanedCode}
            name="codigo"
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
                   Codigo:{item.codigo}- {item.descripcion} - Cantidad: {item.cantidad} - Subtotal: ${item.cantidad * item.precio}
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
