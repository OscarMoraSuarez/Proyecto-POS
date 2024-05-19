import { useState } from "react";
import { CardProduct } from "./CardProduct";
import { Pagination } from "./Pagination";




export const ProductList = ({products, pages,currentPage,setCurrentPage, /* requestPage, setRequestPage */}) => {
  const [error, setError] = useState(null)
  
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
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} r/* equestPage={requestPage} */ /* setRequestPage={setRequestPage} */ />

    </>
  )
}
