import React, { useState } from "react";
import { eliminarProductoById } from "../../apiRequests";

export const ProductoEliminado = () => {
    return (
        <div className="bg-success mt-2 rounded-2">
            <h3 className="text-center">¡Producto eliminado exitosamente!</h3>
        </div>
    );
};

export const EliminarComponent = ({ producto }) => {
    const [showEliminar, setShowEliminar] = useState(true);
    const [eliminado, setEliminado] = useState(false);

    const eliminarProducto = async () => {
        const response = await eliminarProductoById(producto.productoId);
        if (response.error === null) {
            setShowEliminar(false);
            setEliminado(true);
        }
    };

    return (
        <>
            {showEliminar && (
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1 justify-content-center">
                        <div className="col" id="tarjeta">
                            <div className="card border border-success border-3 w-100">
                                <img src={producto.imagePath} className="card-img-top img-fluid mt-2" style={{ maxHeight: '200px', minHeight: '200px', objectFit: 'contain' }} alt="Producto" />
                                <div className="card-body bg-dark">
                                    <h5 className="card-title">{producto.descripcion}</h5>
                                    <h6 className="text-bg-info text-center rounded">100</h6>
                                    <h6 className="text-center">
                                        <button onClick={eliminarProducto} className="rounded btn btn-danger">Eliminar</button>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {eliminado && <ProductoEliminado />}
        </>
    );
};
