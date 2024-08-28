import api from '../lib/axios';
import { isAxiosError } from "axios";


export async function getElements(){
    try {
        const response = await api.get('/home');
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)&& error.response) {
            throw new Error(error.response.data.message);
        }
        return error;
    }
}



export async function postEmail(formData: FormData) {
    try {
        const url = '/';

        // Verifica el contenido del FormData
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await api.post(url, formData);
        console.log(response.data); // Verifica la respuesta
        return response.data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.error('Error en la solicitud:', error.response.data.message);
            throw new Error(error.response.data.message);
        }
        console.error('Error inesperado:', error);
        throw error;
    }
}
