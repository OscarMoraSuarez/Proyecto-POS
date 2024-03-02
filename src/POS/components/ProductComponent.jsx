



export const ProductComponent = ({producto}) => {
  const{descripcion,precioEntrada,precioSalida,productoId,codigo,imagePath}=producto;
  
                  
  return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-md-6 p-2 mt-2 border-3 border-success">
              <div className="col-md-12 d-flex flex-row  align-items-center">
                <div className="col-md-6">
                  <img src={imagePath} alt="Producto" className="card-img-top img-fluid mt-3"/>
                </div>
                <div className="card-body bg-dark text-success rounded col-md-6">
                  <h6 className="card-title">{descripcion}</h6>
                  <hr/>
                  <h6>Existencia <strong>350</strong></h6>
                  <p className="card-text text-warning">codigo:<span className="text-success ms-1">{codigo}</span></p>    
                  <p className="card-text text-warning">id:<span className="text-success ms-1">{productoId}</span></p>
                  <p className="card-text text-warning">Almacen:<span className="text-success ms-1">200</span></p>
                  <p className="card-text text-warning">Zona Ventas:<span className="text-success ms-1">150</span></p>
                  <p className="card-text text-warning">Precio Entrad:<span className="text-success ms-1">${precioEntrada}</span> </p>
                  <p className="card-text text-warning">Precio Salida:<span className="text-success ms-1">${precioSalida}</span> </p>
                  <hr/>
                </div>
              </div>
            </div>
        </div>
      </div>

  )
}
