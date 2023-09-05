import { useForm } from "../hooks"


export const MovementStock = ({producto,allLocations}) => {

 const{onInputChange,onResetForm,origen,destino,cantidad}=useForm({
    producto:producto,
    cantidad:'',
    origen:'',
    destino:'',
 });  
  const handleMovement=()=>{
    alert(`haz movido ${cantidad} de ${JSON.stringify(producto.descripcion)} de ${origen} a ${destino}`);
    onResetForm();
  }

  return (
    <>
        <div className="card bg-dark col-6">
            <h4 className="text-success text-center">Hacer movimientos</h4>
            <label htmlFor="cantidad" className="text-success" >cantidad</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Cantidad"
                name='cantidad'
                value={cantidad}
                onChange={onInputChange}
                />   
            <label htmlFor="origen" className="text-success">origen</label>
            <select onChange={onInputChange} value={origen} name="origen" className="form-control">
                <option value='ubicacion'>Selecciona una ubicacion</option>
                { allLocations.map(location => (
                <option key={location.idUbicacion}>{location.codigo}</option>
                    ))
                }
            </select>
            <label htmlFor="destino" className="text-success">destino</label>
                
            <select onChange={onInputChange} value={destino} name="destino" className="form-control">
                <option value='ubicacion'>Selecciona una ubicacion</option>
                { allLocations.map(location => (
                <option key={location.idUbicacion}>{location.codigo}</option>
                    ))
                }
            </select>
            <div className="input-group mb-3 mt-1">
                <button onClick={handleMovement} className="btn btn-info" type="button">Hacer movimiento</button>
            </div>  
        </div>       
    </>
  )
}
