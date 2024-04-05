import { useDispatch, useSelector } from "react-redux";
import { getProductByCode,getLocations } from "../../store/";
import { useEffect, useState } from "react";
import { ProductComponent, RemoveStock, AddStock } from "../components";


export const Movimientos = () => {
  const distpatch=useDispatch();
  const product = useSelector((state) => state.productByCode);
  const { productByCode, isLoading } = product;
  const locationsState=useSelector(state=>state.locations);
  const {locations}=locationsState;
  console.log(locations)
  useEffect(() => {
    distpatch(getLocations());
  }, [])
  
  console.log(productByCode);
  const {productoId}=productByCode
  
  const [code, setCode] = useState("");
  
  const dispatch = useDispatch();
const onInputChange = ({ target }) => {
    const codigo = target.value;
    setCode(codigo);
  };

  

  

  const seekProduct = () => {
    
    dispatch(getProductByCode(code))
    .then((response) => {
      const { productoId } = response;
      console.log(productoId)
      
    })
    .catch((error) => console.error(error));
  };

  
  return (
    <>
      <div className="container d-flex flex-column justify-content-center col-6">
        <div className="card bg-dark mt-2 ">
          <h4 className="text-success text-center">Movimientos</h4>
          <div className="input-group mb-3">
            <input
              required
              onChange={onInputChange}
              type="text"
              className="form-control"
              placeholder="codigo"
              name="code"
              value={code}
            />
            <button
              className="btn btn-success m-"
              type="button"
              onClick={seekProduct}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <hr />
      {Object.keys(productByCode).length > 0 && (
        <ProductComponent producto={productByCode} />
      )}
      {Object.keys(productByCode).length > 0 && (
        <div className="container d-flex flex-column justify-content-center">
          <AddStock producto={productByCode} locations={locations} />
        </div>
      )}
      {Object.keys(productByCode).length > 0 && (
        <div className="container d-flex flex-column justify-content-center">
         <RemoveStock producto={productByCode} locations={locations}/>
        </div>
      )}
    </>
  );
};
