import { useMemo, useEffect, useState } from "react";
import { CardProduct } from "./CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices";

export const ProductList = () => {
  const [error, setError] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then(response => {
        if (response && response.error) {
          setError(response.error.message);
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, [dispatch]);

  const { products } = useSelector(state => state.productos);
  console.log(products);
  return (
    <>

      <div className="container">

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-1">
          {error ? (
            <div className="bg-danger rounded-1 text-light text-center">Error: {error}</div>
          ) : (
            products.map(producto => (
              <CardProduct key={producto.productoId} producto={producto} />
            ))
          )}
        </div>

      </div>
    </>
  )
}
