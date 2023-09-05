import { useMemo } from "react";
import { CardProduct } from "./CardProduct";
import { getAllProducts } from "../helpers/getAllProducts";

export const ProductList = () => {
    const allProducts=useMemo(()=>{
       return  getAllProducts();
    },[]);  
    
  return (
    <>  
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-1">
             
                { allProducts.map(producto => (
                    <CardProduct key={producto.idProducto} producto={producto}/>
                ))
                }
            
                
            </div>
        </div>
    </>
  )
}
