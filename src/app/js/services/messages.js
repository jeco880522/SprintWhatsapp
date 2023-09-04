import axios from "axios";
import { messageError } from "../sweetalert.js";
import {urlDev} from '../helpers/variables.js';

export const getMessagesUser = async (conversationId) => {
    try {
        const response = await axios.get(urlDev + '/messages?conversationId=' + conversationId);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else {
            return response.data;
        }
    } catch(e) {
        messageError(
            e.message
        )
    }
}