import { useForm } from "../hooks";
import { deleteStock } from "../../apiRequests";

export const RemoveStock = ({ producto, locations }) => {
    const { form, onInputChange, onResetForm } = useForm({
    productoId: producto.productoId,
    codigo: producto.codigo,
    cantidad: '',
    location: '',
    concepto:''

    });
    const { codigo, cantidad,concepto,location } = form;

    console.log(form);

    const handleDeleteStock = async () => {
        if (cantidad == '') {
            alert('Por favor completa todos los campos');
            return;
        }
        const { data } = await deleteStock(form)
        const{producto,cantidad:cantidad1,ubicacion}=data;
        alert(JSON.stringify(data));
        onResetForm();
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="card bg-dark mt-2 col-6 ">
                    <h4 className="text-danger text-center">Eliminar stock</h4>

                    <div className="input-group mb-3 mt-3">
                        <input
                            disabled
                            type="text"
                            className="form-control"
                            placeholder="codigo"
                            name="codigo"
                            value={codigo}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="input-group mb-3">
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
                    <div className="input-group mb-3">
                        <textarea
                            className="form-control"
                            placeholder="concepto"
                            name="concepto"
                            value={concepto}
                            onChange={onInputChange}
                        />

                    </div>
                    <button onClick={handleDeleteStock} className="btn btn-danger mb-2" type="button">Eliminar Stock</button>
                </div>
            </div>
        </>
    )
}
