import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getContact() {
    try {
        const url = 'contact';
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } 
    }
}


