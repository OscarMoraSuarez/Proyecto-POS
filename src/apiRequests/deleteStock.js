import { posApi } from "../store/Api/posApi";

export const deleteStock = async (form) => {

    console.log("desde la funcion", form);
    const productoId = form.productoId;
    const cantidad = parseInt(form.cantidad, 10);
    const ubicacionId = parseInt(form.location);
    const concepto = form.concepto

    const eliminar = {
        productoId,
        cantidad,
        ubicacionId,
        concepto
    }
    console.warn("eliminar:", eliminar);

    console.log(form);
    try {
        const response = await posApi.delete('/egresos', { data: eliminar });
        const data = response.data;
        console.log('Formulario enviado exitosamente', data);
        return { data, error: null }; // Operación exitosa
    } catch (error) {

        if (error.response) {
            // El servidor respondió con un código de estado diferente de 2xx
            console.error('Código de estado:', error.response.status);
            console.error('Respuesta del servidor:', error.response.data);
            return { data: null, error: { status: error.response.status, data: error.response.data } };

        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor');
            return { data: null, error: { message: 'No se recibió respuesta del servidor' } };
        } else {
            // Otro tipo de error
            console.error('Error:', error.message);
            return { data: null, error: { message: error.message } };
        }
    }


}
