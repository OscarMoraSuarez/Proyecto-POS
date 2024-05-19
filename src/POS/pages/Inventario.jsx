import { useEffect, useState } from 'react'
import { ProductList } from '../components/ProductList'
import { getAllProducts } from "../../apiRequests"
import { obtenerConteoProductos } from '../../apiRequests'
import { useSelector, useDispatch } from 'react-redux'
import { getCategorias } from '../../store/slices'

export const Inventario = () => {
  const dispatch = useDispatch();
  const { categorias } = useSelector(state => state.categorias)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  /* const [requestPage, setRequestPage] = useState(0) */
  const initialState = {
    productList: [],
    pages: 0,
    totalProducts: 0,
    productsPerPage: 0,

  }
  const [componentState, setComponentState] = useState(initialState)

  useEffect(() => {
    getAllProducts(currentPage-1)
      .then(response => {
        if (response && response.error) {
        } else {
          const { data } = response;
          const { totalPages, totalElements, numberOfElements, content } = data;
          setComponentState(prevState => ({
            ...prevState,
            productList: content,
            pages: totalPages,
            totalProducts: totalElements,
            productsPerPage: numberOfElements,
          }));
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, [currentPage]);

  useEffect(() => {
    dispatch(getCategorias())
      .then(response => {
        if (response && response.error) {
          setError(response.error.message);
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, [dispatch]);
  const {pages,totalProducts,productsPerPage,productList}=componentState;
  const onSelectChange = () => {

  }
  return (
    <>
      <h2 className="text-dark text-center mt-2">Consulta de inventario</h2>
      <div className="d-flex flex-column align-items-center">
        <form action="" className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por categoría</label>
            <select onChange={onSelectChange} value="" className="form-select" id="exampleSelect1">
              <option value="">seleccione categoria</option>
              {categorias.map((categoria, index) => (<option key={index}>{categoria.nombreCategoria}</option>))}
            </select>
          </div>
        </form>
      </div>

      <ProductList products={productList} pages={pages} totalProducts={totalProducts} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}  currentPage={currentPage} /* requestPage={requestPage} setRequestPage={setRequestPage} */ />
    </>
  )
}
