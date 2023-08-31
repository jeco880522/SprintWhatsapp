import axios from "axios";

export const userByPhone = async (phone) => {
    try {
        const response = await axios.get('http://localhost:3001/users?name='+phone);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else{
            return response.data[0];
        }
    } catch(e) {
        console.error(e);
    }
}