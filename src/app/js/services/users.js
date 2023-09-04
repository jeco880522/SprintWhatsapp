import axios from "axios";
import { messageError } from "../sweetalert.js";
import {urlDev} from '../helpers/variables.js';

export const createUser = async(data) =>{
    try {
        const response = await axios.post(urlDev + '/users' ,data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status !== 201){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else {
            return response;
        }
    } catch (error) {
        messageError(
            e.message
        );
    }
}

export const userByPhone = async (phone) => {
    try {
        const response = await axios.get(urlDev + '/users?celular=' + phone);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        } else {
            return response.data;
        }
    } catch(e) {
        messageError(
            e.message
        );
    }
}

export const userById = async (id) => {
    try {
        const response = await axios.get(urlDev + '/users/' + id);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        } else {
            return response.data;
        }
    } catch(e) {
        messageError(
            e.message
        );
    }
}
