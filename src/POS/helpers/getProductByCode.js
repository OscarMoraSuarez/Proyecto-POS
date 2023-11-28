import { productos } from "../data/productos";

export const getProductByCode=(code)=>{

    const product=productos.find(product=> product.codigo==code)

    return product

}

