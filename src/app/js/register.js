import "../sass/style.scss";
import { cleanDataForm } from "./helpers/functions.js";
import { messageSuccess,messageError } from "./sweetalert.js";
import { userByPhone, createUser} from "./services/users.js";

const formRegister = document.getElementById('register');

formRegister.addEventListener('submit' , async (event) =>{
    event.preventDefault();
    let formRegisterData = new FormData(formRegister);
    formRegisterData = cleanDataForm(formRegisterData);
    try {
        formRegisterData.state = "";
        formRegisterData.fechaConexion = "";

        let validacion = await userByPhone(formRegisterData.celular);
        const validarAtributo = validacion.some(data =>'celular' in data)
        if (validarAtributo) {
            throw new Error(`El telefono ${formRegisterData.celular} ya esta registrado`);
        }else{
            let options = await createUser(formRegisterData);
            await messageSuccess("Registro Correcto", ()=>{
                window.location.href = 'index.html';
            } );
        }
        
    } catch (error) {
        messageError(error.message);
    }
});


