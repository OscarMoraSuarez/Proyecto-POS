import { productos } from "../data/productos";

export const getProductById=(id)=>{
    const  producto=productos.find(product=>product.idProducto==id)
    return producto;

}