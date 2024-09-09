import { formDataToJSON } from '../helpers/formDataToJSON';
import api from '../lib/axios';
import axios, { isAxiosError } from "axios";


export async function getElements(){
    try {
        const locale = localStorage.getItem('locale') || 'en-US'; // Default locale
    const params = { locale }; // Parámetro para la consulta GET
        const response = await api.get('/home', {params});
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

      // Convertir FormData a un objeto JSON
      const json = formDataToJSON(formData);

      // Realizar la solicitud con axios
      const response = await api.post(url, JSON.parse(json));

      return response.data;
  } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
          console.error('Error en la solicitud:', error.response.data.message);
          throw new Error(error.response.data.message);
      }
      console.error('Error inesperado:', error);
      throw error;
  }
}
