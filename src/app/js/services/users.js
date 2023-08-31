import axios from "axios";
import { messageError } from "../sweetalert";

export const userByPhone = async (phone) => {
    try {
        const response = await axios.get('http://localhost:3001/users?celular='+phone);
        const checkAttribute = response.data.some(data => 'celular' in data);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else if (!checkAttribute) {
            throw new Error('Telefono ' + phone + ' No Registrado');
        }else {
            return response.data[0];
        }
    } catch(e) {
        messageError(
            e.message
        )
    }
}