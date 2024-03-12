import { useForm } from "../hooks";
import { eliminarStock } from "../../apiRequests";

export const RemoveStock = ({ producto }) => {
    const { form, onInputChange, onResetForm } = useForm({
        ingresoId:'',
        productoId: producto.productoId,
        cantidad:0,

    });
    const { cantidad, ingresoId } = form;

    const deleteStock = async () => {
        if (!ingresoId || !cantidad) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
       const {data}=await eliminarStock(form)
        alert(data.message);
        onResetForm();
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="card bg-dark mt-2 col-6 ">
                    <h4 className="text-danger text-center">Eliminar stock</h4>
                    <div className="input-group mb-3 mt-3">

                    </div>
                    <div className="input-group mb-3">
                        <input
                            required
                            type="number"
                            className="form-control"
                            placeholder="numero de Ingreso"
                            name="ingresoId"
                            value={ingresoId}
                            onChange={onInputChange}
                        />

                    </div>
                    <div className="input-group mb-3">
                        <input
                            required
                            type="number"
                            className="form-control"
                            placeholder="Cantidad"
                            name="cantidad"
                            value={cantidad}
                            onChange={onInputChange}
                        />
                        <button onClick={deleteStock} className="btn btn-success" type="button">Eliminar stock</button>
                    </div>
                </div>
            </div>

        </>
    )
}
