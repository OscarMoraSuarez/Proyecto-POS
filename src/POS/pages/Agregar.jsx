import { useEffect, useState } from "react";
import { AddProduct } from "../components";
import { Card } from "../components/AgregarCard";




export const Agregar = () => {
  const [currentProduct, setCurrentProduct] = useState({})
  const setProductProperties = (productData) => {
    
    setCurrentProduct(productData);
    
  };

  



  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">

          <AddProduct setProductProperties={setProductProperties} />

          {(Object.keys(currentProduct).length !== 0)?<Card descripcion={currentProduct.descripcion}
                                  codigo={currentProduct.codigo}   
                                  imagePath={currentProduct.imagePath}
                            />:null}

        </div>
      </div>
    </>

  )


}
