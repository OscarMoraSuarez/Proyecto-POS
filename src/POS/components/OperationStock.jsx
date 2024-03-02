import { useMemo, useState } from "react";
import { useForm } from "../hooks";
import { registrarIngreso } from "../../apiRequests";

export const OperationStock = ({ producto, locations }) => {
  /* const [ingreso, setIngreso] = useState({
    productoId: null,
    agregar: null,
    location: null
  }); */
  console.log(producto)

  const workingLocations = locations.filter(location => location.id === 1 || location.id === 3);

  const { form, onInputChange, onResetForm } = useForm({
    productoId: producto.productoId,
    agregar: '',
    eliminar: '',
    location: ''
  });
  const { agregar, location,eliminar } = form;
  const agregarStock = () => {
    registrarIngreso(form)
    onResetForm();
  };

  const eliminarStock = () => {
    alert(`Has eliminado ${form.eliminar} de ${JSON.stringify(producto.descripcion)} en la posición ${form.location}`);
    onResetForm();
  };

  return (
    <>
      <div className="card bg-dark mt-2 col-6">
        <h4 className="text-success text-center">Agregar o eliminar stock</h4>
        <div className="input-group mb-3 mt-3">
          <select required onChange={onInputChange} value={location} name="location" className="form-control">
            <option value='ubicacion'>Selecciona una ubicacion</option>
            {workingLocations.map(location => (
              <option value={location.id} key={location.id}>{location.codigoUbicacion}</option>
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
          <button onClick={agregarStock} className="btn btn-success" type="button">Agregar stock</button>
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
