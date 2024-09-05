import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getContact() {
    const locale = localStorage.getItem('locale') || 'en-ES'; // Default locale
    const params = { locale }; // Parámetro para la consulta GET
    try {
        const url = 'contact';
        const {data} = await api.get(url, {params});
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } 
    }
}


