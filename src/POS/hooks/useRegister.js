import React, { useState } from 'react';

const initialProducts = [
  { codigo: '001', descripcion: 'Producto 1', precio: 10 },
  { codigo: '002', descripcion: 'Producto 2', precio: 15 },
  { codigo: '003', descripcion: 'Producto 3', precio: 20 },
];

export const Venta = () => {
  const [codigo, setCodigo] = useState('');
  const [listaCompra, setListaCompra] = useState([]);
  const [total, setTotal] = useState(0);
  let scanTimer;

  const addProduct = (codigo) => {
    const productToAdd = initialProducts.find((product) => product.codigo === codigo);

    if (productToAdd) {
      const existingItem = listaCompra.find((item) => item.codigo === codigo);

      if (existingItem) {
        existingItem.cantidad += 1;
      } else {
        listaCompra.push({ ...productToAdd, cantidad: 1 });
      }
    setCodigo(''); 
    } else {
      console.log('no se encontro el producto')
    }

    updateTotal();
  };

  const removeProduct = (item) => {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      const index = listaCompra.indexOf(item);
      listaCompra.splice(index, 1);
    }

    updateTotal();
  };

  const updateTotal = () => {
    let newTotal = 0;

    listaCompra.forEach((item) => {
      newTotal += item.cantidad * item.precio;
    });

    setTotal(newTotal);
  };

  const handleInputChange = (event) => {
    const newCodigo = event.target.value;
    if (newCodigo.length > 5) {
      addProduct(newCodigo);
      
    } else {
      setCodigo(newCodigo);
    }
  };

  return (
    <div>
      <h1>Caja</h1>
      <input
        type="text"
        placeholder="Escanea el código de barras"
        value={codigo}
        onChange={handleInputChange}
      />

      <ul>
        {listaCompra.map((item) => (
          <li key={item.codigo}>
            {item.descripcion} - Cantidad: {item.cantidad} - Subtotal: {item.cantidad * item.precio}
            <button onClick={() => removeProduct(item)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>Total: {total}</p>
    </div>
  );
};
