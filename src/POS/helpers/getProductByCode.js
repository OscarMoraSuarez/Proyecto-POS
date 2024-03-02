import { useSelector } from "react-redux";

export const getProductByCode = (id) => {
    const {products}=useSelector(state=>state.productos);
    console.log(products);
    /* const product = products.find(product => product.codigo == code) */

    return products
}


