import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorias } from '../../store/slices/categorias';
import { registrarProducto } from "../../apiRequests";

export const AddProduct = () => {
  const [error, setError] = useState(null);
  const { categorias, isLoading } = useSelector(state => state.categorias);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorias())
      .catch((error) => {
        setError(error.message);
      })
  }, [])

  const initialForm = {
    codigo: '',
    descripcion: '',
    nombreCategoria: '',
    marca: '',
    precioEntrada: '',
    precioSalida: '',
    imagen: '',

  }
  const [form, setForm] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { name, value, files } = target;

    if (name === 'imagen') {
      //manejar de archivos
      const selectedFile = files[0];
      setForm({
        ...form,
        [name]: selectedFile,
      });
    } else {
      //Manejar otros campos de entrada
      setForm({
        ...form,
        [name]: value
      })
    }


  }
  console.log(form);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('codigo', form.codigo);
    formData.append('descripcion', form.descripcion);
    formData.append('nombreCategoria', form.nombreCategoria);
    formData.append('marca', form.marca);
    formData.append('precioEntrada', form.precioEntrada);
    formData.append('precioSalida', form.precioSalida);
    formData.append('imagen', form.imagen);
    registrarProducto(formData);

  }

  const { codigo, descripcion, nombreCategoria, marca, precioEntrada, precioSalida } = form;

  return (
    <>
      <form onSubmit={onFormSubmit} className="bg-dark col-sm-12 col-md-5 col-lg-4 border border-success border-2 rounded  p-3 mt-5">
        <input onChange={onInputChange} type="text" name="codigo" value={codigo} className="form-control mt-2" placeholder="codigo" />
        <textarea required onChange={onInputChange} name="descripcion" value={descripcion} className="mt-2 mb-2 rounded form-control w-100" placeholder="descripcion" />
        <select onChange={onInputChange} className="form-select" name='nombreCategoria' value={nombreCategoria} id="exampleSelect1">
          <option value="">Seleccione una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.idCategoria} value={categoria.nombreCategoria}>
              {categoria.nombreCategoria}
            </option>
          ))}
        </select>
        <input onChange={onInputChange} name="marca" value={marca} className="mt-2 rounded form-control w-100" placeholder="marca" />
        <input onChange={onInputChange} name="precioEntrada" value={precioEntrada} className="mt-2 rounded form-control w-100" placeholder="precioEntrada" />
        <input onChange={onInputChange} name="precioSalida" value={precioSalida} className="mt-2 rounded form-control w-100" placeholder="precioSalida" />
        <input type="file" onChange={onInputChange} name="imagen" className="mt-2 rounded form-control w-100" placeholder="precioSalida" />
        <div className="form-group mt-2">
        </div>
        <button className="btn btn-success mt-3">Enviar</button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </>
  )
}
