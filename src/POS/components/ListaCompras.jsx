import React from 'react'

export const ListaCompras = ({ listaCompras, incrementItem, removeProduct, deleteItem }) => {
    return (
        <>
            <div className="col col-sm-12 col-md-9">
                <ul className="list-group">
                    {listaCompras.map((item) => (
                        <li key={item.codigo} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>
                                    Codigo:{item.codigo}- {item.descripcion} - Cantidad: {item.cantidad} - Subtotal: ${parseFloat(item.cantidad * item.precioSalida)
                                    }
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
