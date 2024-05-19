import { useEffect, useState } from "react";
import { getDetailsBySellNumber } from "../../apiRequests";

export const InfoDetalle = ({ numeroVenta }) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const handleGetDetails = async () => {
            try {
                const response = await getDetailsBySellNumber(numeroVenta);
                console.log(response)
                setDetails(prevDetails=>response);
            } catch (error) {
                console.error("Error al obtener los detalles:", error);
            }
        };

        handleGetDetails();
    }, [numeroVenta]);

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((detail, index) => (
                            <tr key={index} className="table-active">
                                <th scope="row">{detail.codigoProducto}</th>
                                <td>{detail.precioUnitario}</td>
                                <td>{detail.cantidad}</td>
                                <td>{detail.subtotal}</td>
                            </tr>))
                    }
                </tbody>
            </table>
        </>
    );
};
