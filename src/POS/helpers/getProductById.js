import { useSelector } from "react-redux";

export const getProductById = (id) => {

    const { products } = useSelector(state => state.productos);
    const product = products.find(product => product.productoId == id);
    return product

}


