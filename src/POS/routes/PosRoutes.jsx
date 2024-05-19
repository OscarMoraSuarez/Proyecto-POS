import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Home,Agregar,Buscar,Eliminar,Inventario,Movimientos,Venta,NotFound,ProductPage, Administrar, Ventas, DetalleVenta,FiltroVenta } from "../pages"




export const 
PosRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
          <Routes>
              <Route path='home' element={<Home/>}/>
              <Route path='agregar' element={<Agregar/>}/> 
              <Route path='eliminar' element={<Eliminar/>}/>
              <Route path='inventario' element={<Inventario/>}/>
              <Route path='movimiento' element={<Movimientos/>}/>
              <Route path='venta' element={<Venta/>}/>
              <Route path='buscar' element={<Buscar/>}/>
              <Route path='administrar' element={<Administrar/>}/>
              <Route path='detalle/:numeroVenta' element={<DetalleVenta/>}/>
              <Route path='ventas' element={<Ventas/>}/>
              <Route path='filtro' element={<FiltroVenta/>}/>
              <Route path='producto/:id' element={<ProductPage/>}/>
              <Route path='/' element={<Navigate to={'/home'} />} />
              <Route path='/*' element={<NotFound/>} /> 
          </Routes>
      </div>
    </>
  )
}
