import { useMemo, useState } from "react";
import { useForm } from "../hooks";
import { registrarIngreso } from "../../apiRequests";

export const AddStock = ({ producto, locations }) => {
  const { form, onInputChange, onResetForm } = useForm({
    productoId: producto.productoId,
    codigo: producto.codigo,
    cantidad: '',
    location: ''
  });
  const { cantidad, location, codigo } = form;
  //Agregar stock
  const agregarStock = async () => {
    const { data } = await (registrarIngreso(form))

    const { producto, ubicacion, cantidad } = data;
    alert(`has agregado: ${cantidad},producto:${producto.codigo}, en ubicacion ${ubicacion.codigoUbicacion}`)
    onResetForm()


  };



  return (
    <>
      <div className="row justify-content-center">
        <div className="card bg-dark mt-2 col-6 ">
          <h4 className="text-success text-center">Agregar stock</h4>
          <div className="input-group mb-1">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="Cantidad"
              name="codigo"
              value={codigo}
              onChange={onInputChange}
            />

          </div>
          <div className="input-group mb-3 mt-3">
            <select required onChange={onInputChange} value={location} name="location" className="form-control">
              <option value='ubicacion'>Selecciona una ubicacion</option>
              {locations.map(location => (
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
              name="cantidad"
              value={cantidad}
              onChange={onInputChange}
            />

          </div>
          <button onClick={agregarStock} className="btn btn-success mb-2" type="button">agregarStock</button>
        </div>
      </div>

    </>
  )
}
