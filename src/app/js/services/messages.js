import axios from "axios";
import { messageError } from "../sweetalert.js";
import {urlDev} from '../helpers/variables.js';

export const getMessagesUser = async (conversationId) => {
    try {
        const response = await axios.get(urlDev + '/messages?conversationId=' + conversationId);
        const checkAttribute = response.data.some(data => 'conversationId' in data);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else if (!checkAttribute) {
            throw new Error('No existe la conversacion');
        }else {
            return response.data;
        }
    } catch(e) {
        messageError(
            e.message
        )
    }
}