import { useEffect, useState } from "react";

export const useKart = () => {
  const initialSell={
    subTotal: 0,
    descuento: 0,
    total: 0,
    detallesVenta: []
  }
  const [venta, setVenta] = useState(initialSell);
  
  const calcular = () => {
  setVenta((prevVenta) => {
    let newTotal = 0;
    prevVenta.detallesVenta.forEach((item) => {
      newTotal += item.cantidad * item.precioUnitario;
    });
    return {
      ...prevVenta,
      subTotal: newTotal,
      total: newTotal - prevVenta.descuento
    };
  });
};

  // Utilizamos useEffect para realizar los cálculos después de que el estado se haya actualizado
useEffect(() => {
  // Calculamos el total usando el subTotal actualizado y el descuento
  calcular();
}, [venta.detallesVenta]); // Ejecutamos el efecto solo cuando subTotal cambie


/*funcion para añadir  un porducto al carrito*/

  const addProduct = (product) => {
    console.log("desde addProduct",product)
    if (product) {
      const existingItem = venta.detallesVenta.find((item) => item.codigoProducto === product.codigoProducto);
      if (!existingItem) {
        setVenta((prevVenta) => ({
          ...prevVenta,
          detallesVenta: [...prevVenta.detallesVenta, { ...product, cantidad: 1, subTotal: product.precioUnitario }]
        }));
      } else {
        setVenta((prevVenta) => ({
          ...prevVenta,
          detallesVenta: prevVenta.detallesVenta.map((item) =>
            item.codigoProducto === existingItem.codigoProducto
              ? { ...item, cantidad: item.cantidad + 1, subTotal: (item.cantidad + 1) * item.precioUnitario }
              : item
          )
        }));
      }
    } else {
      console.log('No se encontró el producto');
    }
    
  };
  
  /*funcion para incrmentar un item del carrito*/

  const incrementItem = (item) => {
    setVenta((prevVenta) => ({
      ...prevVenta,
      detallesVenta: prevVenta.detallesVenta.map((kartItem) =>
        kartItem.codigoProducto === item.codigoProducto
          ? { ...kartItem, cantidad: kartItem.cantidad + 1, subTotal: (kartItem.cantidad + 1) * kartItem.precioUnitario }
          : kartItem
      )
    }));
    
  }; 

  /*funcion para decrementar un item del carrito*/

  const removeProduct = (item) => {
    if (item.cantidad > 1) {
      setVenta((prevVenta) => ({
        ...prevVenta,
        detallesVenta: prevVenta.detallesVenta.map((kartItem) =>
          kartItem.codigoProducto === item.codigoProducto
            ? { ...kartItem, cantidad: kartItem.cantidad - 1, subTotal: (kartItem.cantidad - 1) * kartItem.precioUnitario }
            : kartItem
        )
      }));
    } else {
      setVenta((prevVenta) => ({
        ...prevVenta,
        detallesVenta: prevVenta.detallesVenta.filter((cartItem) => cartItem.codigoProducto !== item.codigoProducto)
      }));
    }
    
  };



  /*funcion para eliminar un item del carrito*/
  const deleteItem = (item) => {
    setVenta((prevVenta) => ({
      ...prevVenta,
      detallesVenta: prevVenta.detallesVenta.filter((kartItem) => kartItem.codigoProducto !== item.codigoProducto)
    }));
    
  }; 

  return {
    ...venta,
    initialSell,
    venta,
    addProduct,
    incrementItem,
    removeProduct,
    deleteItem,
    setVenta,
  }; 
};
