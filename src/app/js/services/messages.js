import axios from "axios";
import {messageError} from "../sweetalert.js";
import {url} from '../helpers/variables.js';

export const getMessagesUser = async (conversationId) => {
    try {
        const response = await axios.get(url + '/messages?conversationId=' + conversationId);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else {
            return response.data;
        }
    } catch(e) {
        messageError(
            e.message
        );
    }
}

export const sendMessageUser = async (data) => {
    try {
        const response = await axios.post(url + '/messages' ,data, {
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

export const updateInfoMessage = async (id, data)=> {
    try {
        const response = await axios.put(url + '/messages/' + id, data);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        } else {
            return response;
        }
    } catch(e) {
        messageError(
            e.message
        );
    }
}
