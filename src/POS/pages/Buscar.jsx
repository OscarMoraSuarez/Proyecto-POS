import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getProductsByName } from "../helpers";
import { useForm } from "../hooks";
import { ProductComponent1 } from "../components/ProductComponent1";

export const Buscar = () => {
const navigate=useNavigate();
const location=useLocation();
const query=queryString.parse(location.search);
const {q=''}=queryString.parse(location.search);
console.log({q});
const productos=getProductsByName(q);
const showSearch=(q.length===0);
const showError = ((productos.length===0)&&(q.length>0));

const{searchText,form,onInputChange,onResetForm}=useForm({
  searchText:''
})

const onFormSubmit=(event)=>{
    event.preventDefault();
    navigate(`?q=${searchText}`)  
}

  return (
    <>
     <h1 className='text-info text-center'>Buscar Informacion de Producto</h1>
      <hr />
      <div className="row">
        <div className="col-5 d-flex flex-column">
          <h4 className='text-success'>Buscando</h4>
          <hr />
          <form 
          onSubmit={onFormSubmit}
          >
            <input 
              type="text" 
              placeholder='busca un producto'
              className='form-control'
              name='searchText'
              value={searchText}
              onChange={onInputChange}
              autoComplete='off'
              />
              <button 
              className='btn btn-outline-success mt-2' 
              >
                buscar
              </button>
          </form>
        </div>
        <div className="col-7">
          <h4 className="text-dark">Resultados</h4>
          <hr />
          <div className="alert alert-success animate__animated animate__fadeIn" style={{display:showSearch?'':'none'}}>
            Busca un porducto
          </div>
          <div className="alert alert-danger  animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            No hay productos con  <b>{q}</b>
          </div>
          
           {productos.map(producto => <ProductComponent1 key={producto.idProducto} producto={producto}/>)  } 
        </div>
      </div>
    </>
  )
}

