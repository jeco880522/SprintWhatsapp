import "../sass/style.scss";
import { userByPhone } from "./services/users.js";
import { cleanDataForm } from "./helpers/functions.js";
import { messageSuccess } from "./sweetalert";
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
        if(dataUser.password === formLoginData.password){
            await messageSuccess(
                "Inicio Sesion con Exito", 
                ()=> {
                    window.location.href = 'chat.html';
                }
            );
        }
    } catch (error) {
        
    }
}