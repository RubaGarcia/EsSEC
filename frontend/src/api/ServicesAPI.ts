import { formDataToJSON } from "../helpers/formDataToJSON";
import api from "../lib/axios";
import { isAxiosError } from "axios";

const locale = localStorage.getItem('locale') || 'en-US'; // Default locale
const params = { locale }; // Parámetro para la consulta GET

export async function getServices(){
    try {
        const response = await api.get('/services', { params });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }
    }
  }



export async function getAuditories(){
    try {
        const response = await api.get('/services/auditories', { params });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }

    }
  }



export async function getProducts(){
    try {
        const response = await api.get('/services/products', { params });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }
    }
  }



export async function getMaintenance(){
    try {
        const response = await api.get('/services/manteinance', { params });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }
    }
  }



export async function getImprovementPlans(){
    try {
        const response = await api.get('/services/improvement-plans', { params });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }

    }
  }



export async function getDigitalKit(){
    try {
        const response = await api.get('/services/digital-kit', { params });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } else {
            throw error;
        }

    }
  }


// type ServiceAPIType = {
//     formData: FormData;
// }

export async function postEmailDigitalKit(formData: FormData) {

  try {
    const url = "/services/digital-kit";

    // Verifica el contenido del FormData
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    const json = formDataToJSON(formData);

    // Realizar la solicitud con axios
    const response = await api.post(url, JSON.parse(json));
    // const response = await api.post(url, formData);
    console.log(response.data); // Verifica la respuesta
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.error("Error en la solicitud:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
    console.error("Error inesperado:", error);
    throw error;
  }
}
