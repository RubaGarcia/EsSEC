import api from '../lib/axios';
import { isAxiosError } from "axios";

type JobAPIType = {
    formData: FormData;
    jobId: string;
};

export async function applyJob({formData, jobId}: JobAPIType){ 
    try {
        const url = `jobs/${jobId}`
        const {data} = await api.post(url, formData);
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } 
    }
}




export async function getJobs() {
    try {
        const url = 'jobs';
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } 
    }
}




export async function getJobById({ProjectId}: {ProjectId: string}){
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