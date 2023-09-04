import "../sass/style.scss";
import { convertDateFormat } from "./helpers/functions.js";
import { userById } from "./services/users.js";
import { getConversationsUser } from "./services/conversations.js";
import { getMessagesUser } from "./services/messages.js";
import { messageError } from "./sweetalert.js";
const chatsContacts = document.querySelector(".chats__contacts");
const chatContainer = document.querySelector(".chat__container");
const headerChat = document.querySelector(".header__chat");

function initChat(){
    buildChatsContacts();
}

async function buildChatsContacts(){
    try {
        const idUser = localStorage.getItem('idUser');
        let conversations =  await getConversationsUser(idUser);
        let dataUser = await userById(idUser);
        document.querySelector('.header__user--figure img').src = dataUser.image;
        // chatContainer.style.display = 'none';
        // headerChat.style.display = 'none';
        conversations.forEach( async (conversation) => {
            let messages =  await getMessagesUser(conversation.id);
            messages = messages.sort((a, b) => new Date(b.date) - new Date(a.date));
            let date = convertDateFormat(messages[0].date);
            let dataContact = await getDataUserContact(conversation,idUser);
            let name = dataContact.nombre.split(" ")[0];
            let flag = messages[0].flag === "true"? true : false;
            chatsContacts.innerHTML += `
            <label class="chat__contact" for="">
                <figure class="chat__contact--figure">
                    <img src=${dataContact.image} alt="">
                </figure>
                <div class="chat__description">
                    <div class="chat__description--up">
                        <p>${name}</p>
                        <p>${date}</p>
                    </div>
                    <div class="chat__description--down">
                        <img src=${flag === true ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'}" alt="">
                        <p>${messages[0].message}</p>
                    </div>
                </div>
            </label>
            `;
        });
    } catch (error) {
        messageError(error.message);
    }
}

async function getDataUserContact(conversation, idUser){
    try {;
        let auxIdUser = "";
        if(conversation.idUser1.toString() === idUser.toString()){
            auxIdUser = conversation.idUser2;
        }else if (conversation.idUser2.toString() === idUser.toString()){
            auxIdUser = conversation.idUser1;
        }
        let dataUser = await userById(auxIdUser);
        return dataUser;
    } catch (error) {
        messageError(error.message);
    }
    
}

initChat();