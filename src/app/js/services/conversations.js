import axios from "axios";
import { messageError } from "../sweetalert.js";
import { url } from '../helpers/variables.js';

export const getConversationsUser = async (idUser) => {
    try {
        const responseOne = await axios.get(url + '/conversations?idUser1=' + idUser);
        const responseTwo = await axios.get(url + '/conversations?idUser2=' + idUser);
        let conversations = responseOne.data.concat(responseTwo.data);
        if(responseOne.status !== 200 || responseTwo.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + responseOne.status);
        }else {
            return conversations;
        }
    } catch(e) {
        messageError(
            e.message
        );
    }
}

export const getConversationById = async (id) => {
    try {
        const response = await axios.get(url + '/conversations/' + id);
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