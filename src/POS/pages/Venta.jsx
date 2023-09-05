import { useForm } from "../hooks";
import { getImagePath}from '../helpers/getImagePath';


export const Venta = () => {

const imagePath=getImagePath();
console.log(imagePath);
const{onInputChange}=useForm({

})

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio Unitario</th>
                  <th scope="col">Descuento</th>
                  <th scope="col">%Descuento</th>
                  <th scope="col">Subtotal</th>
                 </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src={`/assets/products/Pepsi lata269ml.jpg`} alt="Imagen del producto" className="me-2" style={{width: '50px',height:'50px', objectFit:'contain'}}/>
                      <span style={{display: 'inline-block', marginLeft:'10px'}}>pepsi lata 350ml</span>
                    </div>
                  </th>
                   <td>
                      <button className="btn btn-success">+</button>
                      <input onChange={onInputChange}  type="text" className="text-center" name="cantidad1"  value="2"/>
                      <button className="btn btn-danger">-</button>
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3500</td>
                </tr>
                <tr className="table-active">
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src={`/assets/products/Sprite lata330ml.jpg`} alt="Imagen del producto" className="me-2" style={{width: '50px',height:'50px', objectFit:'contain'}}/>
                      <span style={{display: 'inline-block', marginLeft:'10px'}}>Sprite lata 350ml</span>
                    </div>
                  </th>
                  <td>
                    <button className="btn btn-success">+</button>
                    <input onChange={onInputChange} type="text" className="text-center" name="cantidad2" value="2"/>
                    <button className="btn btn-danger">-</button>
                  </td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>3500</td>
                </tr>
                <tr className="table-active">
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src={`/assets/products/Coca cola lata330ml.jpg`} alt="Imagen del producto" className="me-2" style={{width: '50px', height: '50px', objectFit: 'contain'}}/>
                      <span style={{display: 'inline-block', marginLeft:'10px'}}>coca-cola 350ml</span>
                    </div>
                  </th>
                  <td>
                    <button className="btn btn-success">+</button>
                      <input onChange={onInputChange} type="text" className="text-center" name="cantidad3" value="2"/>
                      <button className="btn btn-danger">-</button>
                  </td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>3500</td>
                </tr>
                <tr className="table-active">
                  <td colSpan="6">
                    <div className="row">
                      {/*  */}
                      <div className="col-2 bg-warning rounded d-flex justify-content-center m-3" style={{textAlign: 'center'}}>
                        <a href="inventario.html" className=" text-light" style={{textDecoration: 'none'}}>
                          <img src="/assets/icons/restart.png" alt="Inventario" width="50%"/>
                          <p className="text-center mt-2 mb-0">Cancelar producto</p>
                        </a>
                      </div>
                      {/*  */}
                      <div className="col-2 bg-success rounded d-flex justify-content-center m-3" style={{textAlign: 'center'}}>
                        <a href="inventario.html" className=" text-light" style={{textDecoration: 'none'}}>
                          <img src="/assets/icons/buscar.png" alt="Inventario" width="50%"/>
                          <p className="text-center mt-2 mb-0">Buscar Producto</p>
                        </a>
                      </div>
                      {/*  */}
                      <div className="col-2 bg-info rounded-4 d-flex justify-content-center m-3" style={{textAlign: 'center'}}>
                        <a href="inventario.html" className=" text-light" style={{textDecoration: 'none'}}>
                          <img src="/assets/icons/edit.png" alt="Inventario" width="50%"/>
                          <p className="text-center mt-2 mb-0">Cambiar cantidad</p>
                        </a>
                      </div>
                      {/*  */}
                      <div className="col-2 bg-light rounded-4 d-flex flex-wrap m-3" style={{textAlign:'center'}}>
                        <div className="row d-flex justify-content-between">
                          <ul className="list-unstyled">
                            <li> <span>base iva12% <strong></strong> </span></li>
                            <li> <span>base 0% <strong>0</strong> </span></li>
                            <li> <span>Decuento iva12% <strong>0</strong> </span></li>
                            <li> <span>base iva12% <strong>10500</strong> </span></li>
                            <li> <span>iva12% <strong></strong>$10500 </span></li>
                          </ul>
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-2 bg-light rounded-4 d-flex  flex-column align-content-center align-items-center m-3" style={{textAlign: 'center'}}>
                      <div>
                        <span>Total</span><h2>$10500</h2> 
                        <button className="btn btn-success">Pagar</button>                                                        
                      </div>
                    </div>
                    </div>  
                    

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  
          
    </>
  )
}
