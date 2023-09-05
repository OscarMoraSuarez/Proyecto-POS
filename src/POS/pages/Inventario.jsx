import { useState } from 'react';
import { ProductList } from '../components/ProductList';

export const Inventario = () => {

  const [selectedValue, setSelectValue] = useState('categorias')
  const onSelectChange=(event)=>{
    const categoria=event.target.value;
    console.log(categoria);
    setSelectValue(categoria);
  } 
  return (
    <>
      <h2 className="text-dark text-center mt-2">Consulta de inventario</h2>
      <div className="container">
          <div className="row d-flex justify-content-center">

              <form action="" className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
                  <div className="form-group">
                      <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por categoría</label>
                      <select onChange={onSelectChange}   className="form-select" id="exampleSelect1">
                        <option>categorias</option>
                        <option>Aseo</option>
                        <option >Bebidas</option>
                        <option>Enlatados</option>
                        <option>Embutidos</option>
                        <option>licores</option>
                      </select>
                    </div>
              </form>
              <form action="" className="col-sm-12 col-md-5 col-lg-4 bg-dark border border-success border-2 rounded p-2 mt-3">
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label text-success">Filtrar por codigo o descripcion</label>
                    <input type="text" className="form-control"/>
                  </div>
            </form>
            
          </div>
      </div>
      <hr />
      <ProductList/> 
    </>
  )
}
