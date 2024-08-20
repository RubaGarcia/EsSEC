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

