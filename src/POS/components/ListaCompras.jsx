import React from 'react'

export const ListaCompras = ({ detallesVenta, incrementItem, removeProduct, deleteItem }) => {
    // Verifica si detallesVenta está vacío
    if (detallesVenta.length === 0) {
        return <div>No hay productos en la lista de compras.</div>;
    }

    return (
        <>
            <div className="col col-sm-12 col-md-9">
                <ul className="list-group">
                    {detallesVenta.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>
                                    Codigo: {item.codigoProducto} - {item.descripcion} - Cantidad: {item.cantidad} - Subtotal: ${parseFloat(item.cantidad * item.precioUnitario)}
                                </div>
                                <div>
                                    <span className="btn" onClick={() => incrementItem(item)}>+</span>
                                    <span className="btn" onClick={() => removeProduct(item)}>-</span>
                                    <span className="btn" onClick={() => deleteItem(item)}>X</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

