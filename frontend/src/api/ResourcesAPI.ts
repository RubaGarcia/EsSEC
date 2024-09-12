import api from '../lib/axios';
import { isAxiosError } from "axios";


export async function getResources(){
    const locale = localStorage.getItem('locale') || 'en-US'; // Default locale
    const params = { locale }; // Parámetro para la consulta GET
    try {
        const response = await api.get('/resources',{params});
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