import React, { useEffect, useState } from "react";
import { CargarVentasMesRequest } from "../../apiRequests";
import { useNavigate } from "react-router-dom";

const Error = ({ message }) => {
    return (
        <div className="alert alert-dismissible alert-danger">
            <strong>{message}</strong>.
        </div>
    );
};

export const VentasPorMes = () => {
    const navigate=useNavigate();
    const cantidadMeses = 12;
    const [año, setAño] = useState("");
    const [mes, setMes] = useState(""); // Inicialmente no seleccionado
    const [ventas, setVentas] = useState([]);
    const [meses, setMeses] = useState([]);
    const [error, setError] = useState(null);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        // Generar los meses del año
        const mesesArray = [];
        for (let i = 1; i <= cantidadMeses; i++) {
            mesesArray.push(i);
        }
        setMeses(mesesArray);
    }, []);

    const onInputChange = ({ target }) => {
        const value = target.value;
        setAño(value);
    };

    const getMonthlySells = async () => {
        if (!isNaN(parseInt(año)) && año.length === 4) {
            try {
                setVentas([])
                const response = await CargarVentasMesRequest(mes, año);
                const { data } = response;
                if (data.message) {
                    setError(data.message);
                    setShowError(true);
                } else {
                    setShowError(false)
                    setVentas(prevVentas => data.content)
                }
                

            } catch (error) {
                console.error("Error al cargar las ventas:", error);
                setError("Error al cargar las ventas");
                setShowError(true);
            }
        } else {
            alert("No es una fecha válida");
        }
    };
    const handleNavigateSellDetail=(numeroVenta)=>{
        console.log("numero de venta:",numeroVenta)
        navigate(`/detalle/${numeroVenta}`,{replace:false}) 
    }  
    
    return (
        <>
            <div style={{marginLeft:"auto",marginRight:"auto"}} className="col-4 mt-5 bg-success p-3 rounded-3">
                <div className="">
                    <input
                        type="text"
                        name="año"
                        value={año}
                        onChange={onInputChange}
                        className="form-control col-8"
                        placeholder="Año"
                    />
                    <hr />
                    <select
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                        className="form-control col-8"
                    >
                        <option value="">Selecciona un mes</option>
                        {meses.map((m) => (
                            <option key={m} value={m}>{`Mes ${m}`}</option>
                        ))}
                    </select>
                    <button
                        className="btn btn-outline-info mt-2"
                        onClick={getMonthlySells}
                    >
                        Filtrar
                    </button>
                    
                </div>
            </div>
            <table className="table table-hover mt-4">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">N° Venta</th>
                        <th scope="col">Fecha Venta</th>
                        <th scope="col">Mes</th>
                        <th scope="col">Año</th>
                    </tr>
                </thead>
                <tbody>
                 {ventas.map((venta, index) => (
                    <tr key={index} className="" onClick={()=>handleNavigateSellDetail(venta.numeroVenta)} >
                        <th style={{"cursor":"pointer"}}  scope="row">{venta.numeroVenta}</th>
                        <td>{venta.fechaVenta}</td>
                        <td>{venta.mes}</td>
                        <td>{venta.anio}</td>
                    </tr>    
                    

                        ))}
                </tbody>
            </table>
            {showError && <Error message={error} />}
        </>
    );
};
