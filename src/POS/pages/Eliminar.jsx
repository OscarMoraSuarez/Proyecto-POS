import { useForm } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { EliminarComponent } from "../components";
import { useEffect, useState } from "react";
import { getProductsByCategory, getCategorias, getProductByCode } from "../../store";

export const Eliminar = () => {
  const { categorias } = useSelector(state => state.categorias);
  const { productByCode } = useSelector(state => state.productByCode);
  const { productsByCategory } = useSelector(state => state.productsByCategory);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorias())
      .then(response => {
        if (response && response.error) setError(response.error);
      })
      .catch(error => {
        setError(error.message || 'Error desconocido');
      });
  }, []);

  const { onInputChange, categoria, codigo } = useForm({
    categoria: '',
    codigo: ''
  });

  const onFormSubmit = (event) => {
    console.log(categoria);
    event.preventDefault();
    dispatch(getProductsByCategory(0, categoria))
      .then(response => console.log(response))
      .catch(error => console.log(error));
    console.log(categoria);
  };

  const onFormSubmitCode = (event) => {
    event.preventDefault();
    console.log(codigo);

    dispatch(getProductByCode(codigo))
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <>
      <h2 className="text-dark text-center mt-2">Eliminacion de productos</h2>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <form onSubmit={onFormSubmit} className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por categoría</label>
              <select required onChange={onInputChange} name='categoria' value={categoria} className="form-select" id="exampleSelect1">
                <option value="">Seleccione una categoría</option>
                {categorias.map(categoria => <option key={categoria.idCategoria} >{categoria.nombreCategoria}</option>)}
              </select>
              <button className="btn btn-success mt-2 text-center">
                filtrar productos
              </button>
            </div>
          </form>

          <form onSubmit={onFormSubmitCode} className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por código</label>
              <input
                type="text"
                className="form-control"
                placeholder="código"
                name='codigo'
                value={codigo}
                onChange={onInputChange}
              />
              <button className="btn btn-success mt-2 text-center">
                filtrar producto
              </button>
            </div>
          </form>

          {productsByCategory.length > 0 && productsByCategory.map(product => <EliminarComponent key={product.productoId} producto={product} />)}

          {Object.keys(productByCode).length > 0 && <EliminarComponent producto={productByCode} />}
        </div>
      </div>
    </>
  );
};
