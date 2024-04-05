import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerCantidad } from "../../apiRequests";

export const CardProduct = ({ producto }) => {
  const { descripcion, productoId, imagePath, codigo } = producto;
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(0); // Inicializamos con cero

  useEffect(() => {
    const getQuantity = async () => {
      try {
        const response = await obtenerCantidad(codigo);
        if (response.data !== null) {
          setCantidad(response.data);
        } else {
          setCantidad(0);
        }
      } catch (error) {
        console.error("Error al obtener la cantidad del producto:", error);
        setCantidad(0);
      }
    };

    getQuantity();
  }, [codigo]);

  const handleNavigateProduct = () => {
    navigate(`/producto/${productoId}`, { replace: false });
  };

  return (
    <div className="col">
      <div className="card border border-success border-3">
        <img
          loading="lazy"
          src={imagePath}
          className="card-img-top img-fluid mt-2"
          style={{ maxHeight: "200px", objectFit: "contain" }}
          alt="Producto 1"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{descripcion}</h5>
          <h6 className="text-bg-info text-center rounded">{cantidad}</h6>
          <button onClick={handleNavigateProduct} className="btn btn-success">
            Gestionar
          </button>
        </div>
      </div>
    </div>
  );
};
