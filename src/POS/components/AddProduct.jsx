import { useMemo } from "react";
import { getAllCategories } from "../helpers";
import { useForm } from "../hooks";

export const AddProduct = () => {
  const initialForm={
    codigoEan:'',
    codigoSKU:'',
    descripcion:'',
    precioEntrada:'',
    precioSalida:'',
    marca:'',
    categoria:'',
  }
  const categories=useMemo(()=>{
     return getAllCategories();             
  },[])
  console.log(categories);

  const{form, onInputChange, onResetForm, descripcion, precioEntrada, precioSalida, marca, categoria,codigoEan,codigoSKU }=useForm(initialForm);

  return (
    <>
      <form className="bg-dark col-sm-12 col-md-5 col-lg-4 border border-success border-2 rounded  p-3 mt-5">
            <input onChange={onInputChange} type="text" className="form-control mt-1" placeholder="codigo"/>
            <input onChange={onInputChange} type="text" name="codigoSku" value={codigoEan} className="form-control mt-2" placeholder="precio entrada"/>
            <input onChange={onInputChange} type="text" name="codigoSku" value={codigoSKU} className="form-control mt-2" placeholder="precio entrada"/>
            <textarea onChange={onInputChange} name="descripcion" value={descripcion} className="mt-2 rounded form-control w-100" placeholder="descripcion"/>
            <input onChange={onInputChange} type="text" name="precioEntrada" value={precioEntrada} className="form-control mt-2" placeholder="precio entrada"/>
            <input onChange={onInputChange} type="text" name="precioSalida" value={precioSalida} className="form-control mt-2" placeholder="precio salida"/>
            <input onChange={onInputChange} type="text" name="marca" value={marca} className="form-control mt-2" placeholder="marca"/>
            <div className="form-group mt-2">
            <select onChange={onInputChange} className="form-select" name='categoria' value={categoria} id="exampleSelect1">
                  <option value="cateogria">categoria</option>
                 {
                    categories.map((categoria,index)=>{
                     return  <option  key={index} value="cateogria">{categoria}</option>
                    }) 
                 }
                  
            </select>
            </div>
            <button className="btn btn-success mt-3">Enviar</button>
        </form>   
    </>
  )
}
