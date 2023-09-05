import { AddProduct } from "../components";

export const Agregar = () => {
  const producto='Coca cola lata330ml.jpg';
  const imagePath=`/assets/products/${producto}`;
  
  return(
    <>
      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
           
            <AddProduct/>

            <div className="col-sm-12 col-md-5 col-lg-4">
              <div className="card text-white mt-5 border border-success border-2">
                <div className="card-header bg-dark">
                  Coca-cola 350ml lata
                </div>
                <img  src={imagePath} className="card-img-top img-fluid mt-2" alt="Imagen del producto" style={{maxHeight:'200px',objectFit:'contain'}}/>
                <div className="card-body">
                  <h5 className="card-title">Coca-cola 350ml lata</h5>
                  <a href=""><button className="btn btn-success">Detalles</button></a>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </>

  )
    
  
}
