import { useNavigate } from "react-router-dom";
export const CardProduct = ({producto}) => {
  
  //console.log(producto)
 
  const {descripcion,productoId,imagePath,codigo }=producto;
  //console.log(producto, descripcion)
  
  
  const navigate=useNavigate();
  const handleNavigateProduct=()=>{
    navigate(`/producto/${productoId}`,{
      replace:false
    })
  }
  
  
  return (
    <>  
      <div className="col">
          <div className="card border border-success border-3">
            <img loading="lazy" src={imagePath} className="card-img-top img-fluid mt-2" style={{maxHeight: '200px', objectFit: 'contain'}} alt="Producto 1"/>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{descripcion}</h5>
              <h6 className="text-bg-info text-center rounded">150</h6>
              
              <button onClick={handleNavigateProduct} className="btn btn-success ">
                gestionar
              </button>
            </div>
          </div>
      </div>
    </>
  )
}
