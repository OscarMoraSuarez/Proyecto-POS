import { useMemo } from "react";
import { getAllLocations } from "../helpers";
import { useForm } from "../hooks";

export const OperationStock = ({producto,allLocations}) => {

const { form, onInputChange,onResetForm,agregar,eliminar,location}=useForm({
    producto:producto,
    agregar:'',
    eliminar:'',
    location:''
});

const agregarStock=()=>{
    alert(`haz agregado ${agregar} de  ${JSON.stringify(producto.descripcion)}  en la poscicion ${location}`);
    onResetForm();
}
const eliminarStock=()=>{
    alert(`haz eliminado ${eliminar} de  ${JSON.stringify(producto.descripcion)}  en la poscicion ${location}`);
    onResetForm();
}

  return (
    <>
        <div className="card bg-dark mt-2 col-6">
          <h4 className="text-success text-center">Agregar o eliminar stock</h4>
            <div className="input-group mb-3 mt-3">
              <select onChange={onInputChange} value={location} name="location" className="form-control">
                <option value='ubicacion'>Selecciona una ubicacion</option>
                { allLocations.map(location => (
                    <option key={location.idUbicacion}>{location.codigo}</option>
                ))
                }
              </select>
            </div>
            <div className="input-group mb-3">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Cantidad"
                name="agregar"
                value={agregar}
                onChange={onInputChange}
                />
              <button onClick={agregarStock}  className="btn btn-success" type="button">Agregar stock</button>
            </div>
            <div className="input-group mb-3">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Cantidad"
                name='eliminar'
                value={eliminar}
                onChange={onInputChange}
                />
              <button onClick={eliminarStock} className="btn btn-danger" type="button">Eliminar Stock</button>
            </div>
        </div>
    </>
  )
}
