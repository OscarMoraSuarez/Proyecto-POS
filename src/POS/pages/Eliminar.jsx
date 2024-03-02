import { useForm } from "../hooks"
import { useSelector } from "react-redux";


export const Eliminar = () => {

 const{ products }=useSelector(state=>state.productos);
 
  
 const producto='Pepsi lata269ml.jpg';
 const imagePath=`/assets/products/${producto}`  
 const{onInputChange,categoria,parametro}=useForm({
    categoria:'',
    paremetro:''
 });
  return (
    <>  
        <h2 className="text-dark text-center mt-2">Eliminacion de productos</h2>
        <div className="container">
            <div className="row d-flex flex-column justify-content-center align-items-center">
              <form className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por categoría</label>
                  <select onChange={onInputChange} name='categoria' value={categoria} className="form-select" id="exampleSelect1">
                    <option>categoria</option>
                  </select>
                </div>
              </form>
              
              <form className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por codigo o descripcion</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Cantidad"
                    name='parametro'
                    value={parametro}
                    onChange={onInputChange}
                    />
                </div>
              </form>

              <div className="container">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-1 justify-content-center">
                    <div className="col" id="tarjeta">
                      <div className="card border border-success border-3 w-100">
                        <img src={imagePath} className="card-img-top img-fluid mt-2" style={{maxHeight:'200px', minHeight:'200px', objectFit:'contain'}} alt="Producto 4"/>
                        <div className="card-body bg-dark">
                          <h5 className="card-title">pepsi-350ml-lata</h5>
                          <h6 className="text-bg-info text-center rounded">100</h6>
                          <h6 className="text-center">
                            <button className="rounded btn btn-danger">Eliminar</button>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        






  
    </>
  )
}
