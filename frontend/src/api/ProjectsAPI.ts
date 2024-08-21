import api from '../lib/axios';
import { isAxiosError } from "axios";

export async function getProjects(){
    try {
        const response = await api.get('/projects');
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


export async function getProjectById({ProjectId}: {ProjectId: string}){
    try {
        const response = await api.get(`/projects/${ProjectId}`);
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
