import React, { useState, useEffect } from "react";
import { useForm } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCode } from "../../store";
import { ProductComponent, ErrorComponent, SearchComponent } from "../components";

export const Buscar = () => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState(true);
  const [showProduct, setShowProduct] = useState(false);

  const dispatch = useDispatch();
  const { productByCode } = useSelector(state => state.productByCode);
  const searchMessage = "Ingresa el código del producto";

  const { productCode, onInputChange, onResetForm } = useForm({
    productCode: ""
  });

  useEffect(() => {
    // Actualizar la visibilidad del componente de búsqueda
    setSearch(productCode === "" && Object.keys(productByCode).length === 0);

    // Actualizar la visibilidad del componente de producto
    setShowProduct(Object.keys(productByCode).length > 0);
  }, [productByCode, productCode]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductByCode(productCode))
      .then(response => {
        if (response && response.error) {
          setError(response.error);
          setShowProduct(false); // Oculta el componente de producto en caso de error
        } else {
          setError("");
          setShowProduct(true); // Muestra el componente de producto si la búsqueda tiene éxito
        }
      })
      .catch(error => {
        setError(error.message || 'Error desconocido');
      });
    onResetForm();
  };
  
  return (
    <>
      <h1 className="text-info text-center">Buscar Información de Producto</h1>
      <hr />
      <div className="row">
        <div className="col-5 d-flex flex-column">
          <h4 className="text-success">Buscando</h4>
          <hr />
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Busca un producto"
              className="form-control"
              name="productCode"
              value={productCode}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-success mt-2">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {search && <SearchComponent searchMessage={searchMessage} />}
          {error && <ErrorComponent errorMessage={error} />}
          {showProduct && <ProductComponent producto={productByCode} />}
        </div>
      </div>
    </>
  );
};
