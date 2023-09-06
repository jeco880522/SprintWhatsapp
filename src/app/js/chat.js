import "../sass/style.scss";
import { convertDateFormat, convertFormatDateMessage } from "./helpers/functions.js";
import { userById } from "./services/users.js";
import { getConversationsUser,getConversationById } from "./services/conversations.js";
import { getMessagesUser } from "./services/messages.js";
import { messageError } from "./sweetalert.js";

const chatsContacts = document.querySelector('.chats__contacts');
const chatsContainer = document.querySelector('.chats__container');
const chatContainer = document.querySelector('.chat__container');
const headerUser = document.querySelector('.header__user');
const headerChat = document.querySelector('.header__chat');
const homeModal = document.querySelector('.home__modal');
const idUser = localStorage.getItem('idUser');
const chatMessages = document.querySelector('.chat__menssages');

document.addEventListener("DOMContentLoaded", function() {
    buildChatsContacts();
});

async function buildChatsContacts(){
    try {
        let conversations =  await getConversationsUser(idUser);
        let dataUser = await userById(idUser);
        document.querySelector('.header__user--figure img').src = dataUser.image;
        conversations.forEach( async (conversation) => {
            let messages =  await getMessagesUser(conversation.id);
            messages = messages.sort((a, b) => new Date(b.date) - new Date(a.date));
            console.log("message",messages);
            let date = convertDateFormat(messages[0].date);
            let dataContact = await getDataUserContact(conversation,idUser);
            let name = dataContact.nombre.split(" ")[0];
            let flag = messages[0].flag === "true"? true : false;
            let message = messages[0].message;
            let idElement = 'C'+conversation.id+'C';
            let image = dataContact.image;
            chatsContacts.innerHTML += `
                <div id="${idElement}" class="chat__contact">
                    <figure class="chat__contact--figure">
                        <img src=${image} alt="">
                    </figure>
                    <div class="chat__description">
                        <div class="chat__description--up">
                            <p>${name}</p>
                            <p>${date}</p>
                        </div>
                        <div class="chat__description--down">
                            <img src=${flag === true ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'}" alt="">
                            <p>${message}</p>
                        </div>
                    </div>
                </div>`;
        });
        addEventContact();
        document.querySelector('.header__chat__back--figure').addEventListener("click", function(){
            chatContainer.style.display = 'none';
            headerChat.style.display = 'none';
            headerUser.style.display = 'flex';
            chatsContainer.style.display = 'flex';
        });
    } catch (error) {
        messageError(error.message);
    }
}

async function getDataUserContact(conversation, idUser){
    try {
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

function addEventContact() {
    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                let containerArray = document.querySelectorAll('.chat__contact');
                if(containerArray.length > 0){
                    containerArray.forEach(function (container) {
                        const id = container.id;
                        document.getElementById(id).addEventListener("click", function () {
                            hiddenChatWithMessage(id.replace('C','').replace('C',''));
                        });
                    });
                }
            }
        }
    });
    observer.observe(chatsContacts, { childList: true });
}

async function hiddenChatWithMessage(idConsersation){
    try {
        if (window.innerWidth < 600) {
            chatContainer.style.display = 'block';
            headerChat.style.display = 'flex';
            headerUser.style.display = 'none';
            chatsContainer.style.display = 'none';
        } else {
            homeModal.style.display = 'none';
        }
        let conversationData = await getConversationById(idConsersation);
        let userChat = await getDataUserContact(conversationData, idUser);
        document.querySelector('.header__chat--figure img').src = userChat.image;
        document.querySelector('.header__chat--text--name').textContent = userChat.nombre.split(" ")[0];
        document.querySelector('.header__chat--text--state').textContent = userChat.state === "true" ? "EN LINEA" : userChat.fechaConexion;
        let messages =  await getMessagesUser(idConsersation);
        messages = messages.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
        chatMessages.innerHTML = '';
        messages.forEach(message => {
            if (message.userId.toString() === idUser.toString()) {
                chatMessages.innerHTML += `
                <div class="message__box message__my">
                    <p>${message.message}
                        <span>${convertFormatDateMessage(message.date)}
                            <img class="message__see" src="https://i.ibb.co/1ZY2Jfh/see-hidden.png" alt="">
                        </span>
                    </p>
                </div>
                `;
            } else {
                chatMessages.innerHTML += `
                <div class="message__box message__friend">
                    <p>${message.message}<br><span>${convertFormatDateMessage(message.date)}</span></p>
                </div>
                `;
            }
        });
    } catch (error) {
        messageError(error.message);
    }
}

window.addEventListener('resize', function(){
    if (window.innerWidth > 600) {
        if(chatContainer.style.display === 'block' && headerChat.style.display === 'flex'){
            homeModal.style.display = 'none';
            headerUser.style.display = 'flex';
            chatsContainer.style.display = 'flex';
        }
    }else{
        if(chatContainer.style.display === 'block' && headerChat.style.display === 'flex'){
            homeModal.style.display = 'none';
            headerUser.style.display = 'none';
            chatsContainer.style.display = 'none';
        }
    }
});
