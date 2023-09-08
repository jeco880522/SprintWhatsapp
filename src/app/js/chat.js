import "../sass/style.scss";
import { convertDateFormat, convertFormatDateMessage, getCurrentDateInFormat } from "./helpers/functions.js";
import { userById } from "./services/users.js";
import { getConversationsUser,getConversationById } from "./services/conversations.js";
import { getMessagesUser, sendMessageUser } from "./services/messages.js";
import { messageError, messageInfo } from "./sweetalert.js";

const chatsContacts = document.querySelector('.chats__contacts');
const chatsContainer = document.querySelector('.chats__container');
const chatContainer = document.querySelector('.chat__container');
const headerUser = document.querySelector('.header__user');
const headerChat = document.querySelector('.header__chat');
const idUser = localStorage.getItem('idUser');
const chatMessages = document.querySelector('.chat__menssages');

document.addEventListener("DOMContentLoaded", function() {
    buildHome();
});

async function buildHome(){
    try {
        let conversations =  await getConversationsUser(idUser);
        if(conversations.length === 0){
            throw new Error('El Usuario no tiene Contactos');
        }
        let dataUser = await userById(idUser);
        document.querySelector('.header__user--figure img').src = dataUser.image;
        let lastMessagesReceived = [];
        const bringLatestMessages = conversations.map( async (conversation) => {
            let messages =  await getMessagesUser(conversation.id);
            messages = messages.sort((a, b) => {return new Date(b.date) - new Date(a.date)});
            lastMessagesReceived.push(messages[0]);
        });
        await Promise.all(bringLatestMessages);
        lastMessagesReceived = lastMessagesReceived.sort((a, b) =>{ return new Date(b.date) - new Date(a.date)});
        const mapaOrdenDeseado = new Map();
        lastMessagesReceived.forEach((elemento, indice) => {
            mapaOrdenDeseado.set(elemento.conversationId, indice);
        });
        conversations.sort((a, b) => {
            const indiceA = mapaOrdenDeseado.get(a.id) || 0;
            const indiceB = mapaOrdenDeseado.get(b.id) || 0;
            return indiceA - indiceB;
        });
        const buildChatContacts = conversations.map( async (conversation) => {
            let messages =  await getMessagesUser(conversation.id);
            messages = messages.sort((a, b) => {return new Date(b.date) - new Date(a.date)});
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
                    </div>
                    `;
                });
                await Promise.all(buildChatContacts);
                addEventContact();
                hiddenChatWithMessage(lastMessagesReceived[0].conversationId);
                addEventFindContact();
                addEventSendMessage();
    } catch (error) {
        messageError(error.message);
        console.error(error);
    }
}

function addEventFindContact(){
    document.querySelector('.chats__search--input input').addEventListener("keydown", function (event) { 
        if (event.keyCode === 13) { 
            event.preventDefault();
            findContact();
        }
    });
    document.querySelector('.chats__search--figure').addEventListener('click', function(){findContact();});
}

function addEventSendMessage(){
    document.querySelector('.chat__input textarea').addEventListener('keydown',function(event){
        if (event.keyCode === 13 && !event.shiftKey) { 
            event.preventDefault();
            sendMessage(this.value);
            this.value = '';
        }
    });
}

async function sendMessage(message){
    try {
        let data = {
            conversationId: parseInt(document.querySelector('.chat__input textarea').id.replace('CON','')),
            userId: parseInt(idUser),
            date: getCurrentDateInFormat(),
            message: message,
            flag: "false"
        };
        let response = await sendMessageUser(data);
        console.log(response);
        if(response){
            chatMessages.innerHTML += `
            <div class="message__box message__my">
                <p>${data.message.replace(new RegExp('\n', 'g'), '<br>')}
                    <span>${convertFormatDateMessage(data.date)}
                        <img class="message__see" src=${data.flag === 'true' ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'} alt="">
                    </span>
                </p>
            </div>
            `;
        }else{
            throw new Error('El Error al enviar el mensaje, intentelo mas tarde');
        }
    } catch (error) {
        messageError(error.message);
        console.error(error);
    }
}

async function findContact () {
    let nodeListChatContact = document.querySelectorAll('.chat__contact');
    let arrayChatContact = [...nodeListChatContact];
    let searchValue = document.querySelector('.chats__search--input input').value.trimRight();
    document.querySelector('.chats__search--input input').value = document.querySelector('.chats__search--input input').value.trimRight();
    const comparison = (description) => description.querySelector('.chat__description').querySelector('.chat__description--up p').textContent === searchValue || description.querySelector('.chat__description').querySelector('.chat__description--down p').textContent === searchValue;
    const elementFound = arrayChatContact.find(comparison);
    if (elementFound!== undefined) {
        nodeListChatContact.forEach(element => {
            if(element.id !== elementFound.id){
                element.style.display = 'none';
            }
        });
    } else {
        await messageInfo('No se encontraron resultados');
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
        console.error(error);
    }
}

function addEventContact() {
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

async function hiddenChatWithMessage(idConsersation){
    try {
        if(document.querySelector('.chats__search--input input').value.trimRight()!== ''){
            let nodeListChatContact = document.querySelectorAll('.chat__contact');
            nodeListChatContact.forEach(element => {
                if(element.style.display === 'none'){
                    element.style.display = 'flex';
                }
            });
            document.querySelector('.chats__search--input input').value = '';
        }
        if (window.innerWidth < 600) {
            chatContainer.style.display = 'block';
            headerChat.style.display = 'flex';
            headerUser.style.display = 'none';
            chatsContainer.style.display = 'none';
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
                    <p>${message.message.replace(new RegExp('\n', 'g'), '<br>')}
                        <span>${convertFormatDateMessage(message.date)}
                            <img class="message__see" src=${message.flag === 'true' ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'} alt="">
                        </span>
                    </p>
                </div>
                `;
            } else {
                chatMessages.innerHTML += `
                <div class="message__box message__friend">
                    <p>${message.message.replace(new RegExp('\n', 'g'), '<br>')}<br><span>${convertFormatDateMessage(message.date)}</span></p>
                </div>
                `;
            }
        });
        document.querySelector('.chat__input textarea').id = 'CON'+ idConsersation;
    } catch (error) {
        messageError(error.message);
        console.error(error);
    }
}

window.addEventListener('resize', function(){
    if (window.innerWidth > 600) {
        if(chatContainer.style.display === 'block' && headerChat.style.display === 'flex'){
            headerUser.style.display = 'flex';
            chatsContainer.style.display = 'flex';
        }
    }else{
        if(chatContainer.style.display === 'block' && headerChat.style.display === 'flex'){
            headerUser.style.display = 'none';
            chatsContainer.style.display = 'none';
        }
    }
});

document.querySelector('.header__chat__back--figure').addEventListener("click", function(){
    chatMessages.innerHTML = '';
    chatContainer.style.display = 'none';
    headerChat.style.display = 'none';
    headerUser.style.display = 'flex';
    chatsContainer.style.display = 'flex';
});
