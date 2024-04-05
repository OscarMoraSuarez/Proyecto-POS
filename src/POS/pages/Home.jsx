import { Link } from "react-router-dom"


export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row  my-5 justify-content-center align-items-center" style={{textAlign: 'center'}}>
          <div className="col-3 bg-success rounded d-flex justify-content-center text-dark" style={{textAlign: 'center'}}>
              <Link to={'/inventario'} className=" text-dark" style={{ textDecoration: 'none' }}>
                <img src="/assets/icons/en-stock.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">Inventario Productos</h5>
              </Link>
          </div>
            
          <div className="col-3 bg-info rounded d-flex justify-content-center m-1" style={{textAlign: 'center'}}>
              <Link to={'/agregar'} className=" text-light" style={{textDecoration: 'none'}}>
                <img src="/assets/icons/agregar-producto.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">Agregar Producto</h5>
              </Link>
          </div>
          <div className="col-3 bg-danger rounded d-flex justify-content-center m-1" style={{textAlign: 'center'}}>
              <Link to={'/eliminar'} className=" text-dark" style={{textDecoration: 'none'}}>
                <img src="/assets/icons/eliminar.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">Eliminar Producto</h5>
              </Link>
          </div>
          <div className="col-3 bg-primary rounded d-flex justify-content-center m-1" style={{textAlign: 'center'}}>
              <Link to={'/movimiento'} className=" text-dark" style={{textDecoration: 'none'}}>
                <img src="/assets/icons/flecha.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">Movimiento Producto</h5>
              </Link>
          </div>
          <div className="col-3 bg-secondary rounded d-flex justify-content-center m-1" style={{textAlign: 'center'}}>
              <Link to={'/venta'} className=" text-dark" style={{textDecoration: 'none'}}>
                <img src="/assets/icons/ventas.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">venta Productos</h5>
              </Link>
          </div>
          <div className="col-3 bg-warning rounded d-flex justify-content-center m-1" style={{textAlign: 'center'}}>
              <Link to={'/buscar'} className=" text-dark" style={{textDecoration: 'none'}}>
                <img src="/assets/icons/buscar.png" alt="Inventario" width="50%"/>
                <h5 className="text-center mt-2 mb-0">buscar Productos</h5>
              </Link>
          </div>
        </div>
      </div> 
      <footer className="bg-dark text-light fixed-bottom py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            
            <h2>By Oscar Mora Suarez</h2>
          </div>
        </div>
      </div>
  </footer>
  </>
  )
}
