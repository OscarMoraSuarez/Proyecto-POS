import React from 'react'

export const ProductCategoryList = () => {

     /* const onSelectChange = ({ target }) => async (dispatch) => {
    try {
      // Extraer la categoría del valor seleccionado del evento
      const categoria = target.value;
  
      // Realizar la llamada asíncrona para obtener productos por categoría
      const productos = await getProductsByCategory(categoria);
      
      // Despachar la acción con los productos obtenidos
      dispatch({ type: 'PRODUCTOS_POR_CATEGORIA', payload: productos });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la llamada asíncrona
      console.error('Error al obtener productos por categoría:', error);
    }
  }; */



    return (
        <div>
            <div className="container">

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-1">
                    {error ? (
                        <div className="bg-danger rounded-1 text-light text-center">Error: {error}</div>
                    ) : (
                        products.map(producto => (
                            <CardProduct key={producto.productoId} producto={producto} />
                        ))
                    )}
                </div>

            </div>

        </div>
    )
}
