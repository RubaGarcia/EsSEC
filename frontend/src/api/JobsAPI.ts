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