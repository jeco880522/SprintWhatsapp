import axios from "axios";
import { messageError } from "../sweetalert.js";
import {urlDev} from '../helpers/variables.js';

export const getConversationsUser = async (idUser) => {
    try {
        const responseOne = await axios.get(urlDev + '/conversations?idUser1=' + idUser);
        const responseTwo = await axios.get(urlDev + '/conversations?idUser2=' + idUser);
        let conversations = responseOne.data.concat(responseTwo.data);
        const checkAttribute = conversations.some(data => 'id' in data);
        if(responseOne.status !== 200 || responseTwo.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + responseOne.status);
        }else if (!checkAttribute) {
            throw new Error('Usuario No Registrado');
        }else {
            return conversations;
        }
    } catch(e) {
        messageError(
            e.message
        )
    }
}