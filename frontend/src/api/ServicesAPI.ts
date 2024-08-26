import api from '../lib/axios';
import { isAxiosError } from "axios";


export async function getServices(){
    try {
        const response = await api.get('/services');
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

export async function getAuditories(){
    try {
        const response = await api.get('/services/auditories');
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

export async function getProducts(){
    try {
        const response = await api.get('/services/products');
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
        const response = await api.get('/services/manteinance');
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

export async function getImprovementPlans(){
    try {
        const response = await api.get('/services/improvement-plans');
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


export async function getDigitalKit(){
    try {
        const response = await api.get('/services/digital-kit');
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

type ServiceAPIType = {
    formData: FormData;
}

export async function postEmailDigitalKit(formData:FormData){
    try {
        const url = '/services/digital-kit';
        const {data} = await api.post(url, formData);
        // console.log(data);
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        } 
    }
}


