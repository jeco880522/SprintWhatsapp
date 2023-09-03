import "../sass/style.scss";
import { userByPhone } from "./services/users.js";
import { cleanDataForm } from "./helpers/functions.js";
import { messageSuccess, messageError } from "./sweetalert.js";
const formLogin = document.getElementById('login');

function initLogin() {
    formLogin.addEventListener('submit', function(event){
        event.preventDefault();
        captureLoginData();
    });
}

initLogin();

async function captureLoginData(){
    let formLoginData = new FormData(formLogin);
    formLoginData = cleanDataForm(formLoginData);
    try {
        let dataUser = await userByPhone(formLoginData.phone);
        const checkAttribute = dataUser.some(data => 'celular' in data);
        if (!checkAttribute) {
            throw new Error('Telefono ' + phone + ' No Registrado');
        }else {
            let dataUser = dataUser[0];
        }
        if(dataUser.password === formLoginData.password){
            await messageSuccess(
                `Bienvenido, ${dataUser.nombre}`, 
                ()=> { 
                    window.location.href = 'chat.html';
                    localStorage.setItem('idUser', dataUser.id); 
                }
            );
        }else{
            await messageError(
                "Contraseña Incorrecta"
            );
        }
    } catch (error) {
        
    }
}