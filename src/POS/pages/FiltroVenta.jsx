import { useState } from "react";
import { InfoVenta, InfoDetalle } from "../components";

export const FiltroVenta = () => {
  const [numeroVenta, setNumeroVenta] = useState("");
  const [numeroVentaInput, setNumeroVentaInput] = useState("");

  const onInputChange = ({ target }) => {
    const numero = target.value;
    console.log("Numero:", numero);
    setNumeroVentaInput(numero); // Almacenar temporalmente el valor del input
  };

  const defineSellNumber = () => {
    console.log("Número de venta:", numeroVentaInput);
    // Aquí puedes agregar la lógica para enviar el número de venta al servidor

    // Establecer el valor de numeroVenta con el valor del input
    setNumeroVenta(numeroVentaInput);
  };

  return (
    <>
      <div style={{ marginLeft: "auto", marginRight: "auto" }} className="col-4 mt-5 bg-success p-3 rounded-3">
        <div className="">
          <input
            type="text"
            name="numeroVenta"
            value={numeroVentaInput}
            onChange={onInputChange}
            className="form-control col-8"
            placeholder="Número de venta"
          />
          <hr />
          <button
            className="btn btn-outline-info mt-2"
            onClick={defineSellNumber} // Establecer el valor de numeroVenta solo cuando se hace clic en el botón
          >
            Filtrar
          </button>


        </div>

      </div>
      {numeroVenta && (
          <>
            <InfoVenta numeroVenta={numeroVenta} />
            <InfoDetalle numeroVenta={numeroVenta} />
          </>
        )}
    </>


  );
};
