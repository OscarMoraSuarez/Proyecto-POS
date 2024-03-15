import { useEffect, useState } from "react"


export const useKart = () => {
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
      
      
    } else {
      console.log('No se encontró el producto');
    }
  };

  //incrementar item
  const incrementItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.map((cartItem) =>
        cartItem.codigo === item.codigo
          ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
          : cartItem
      )
    );
    
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
    
  };

  const deleteItem = (item) => {
    setListaCompras((prevLista) =>
      prevLista.filter((cartItem) => cartItem.codigo !== item.codigo)
    );
    
  };


  return{
    listaCompras,
    total,
    addProduct,
    incrementItem,
    removeProduct,
    deleteItem
  } 
}
