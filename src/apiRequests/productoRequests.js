import { useState } from "react";
import { posApi } from "../store/Api/posApi";

export const registrarProducto = async (formData) => {
    let error = null;

    try {
        const response = await fetch('http://localhost:8080/producto', {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Error al enviar el formulario');
        }
        const data = await response.json();
        console.log('Formulario enviado exitosamente', data);
      } catch (error) {
        console.error('Error al enviar el formulario', error);
        
      } 

    return error;
}

