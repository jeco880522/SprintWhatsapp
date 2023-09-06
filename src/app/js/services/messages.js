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

export const getListMessages = async () => {
    try {
        const response = await axios.get(url + '/messages');
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
