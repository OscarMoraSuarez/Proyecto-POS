import { productos } from "../data";

export const getProductsByName = (descripcion) => {
  descripcion=descripcion.toLocaleLowerCase().trim();
  if(descripcion.length===0)return[];
  return productos.filter(
        producto=>producto.descripcion.toLowerCase().includes(descripcion)
    ) 
}
