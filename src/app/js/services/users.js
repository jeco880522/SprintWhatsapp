import axios from "axios";
import { messageError } from "../sweetalert.js";
import {urlDev} from '../helpers/variables.js';

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
        )
    }
}