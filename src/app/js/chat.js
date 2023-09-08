import "../sass/style.scss";
import { convertDateFormat, convertFormatDateMessage, getCurrentDateInFormat } from "./helpers/functions.js";
import { userById } from "./services/users.js";
import { getConversationsUser,getConversationById } from "./services/conversations.js";
import { getMessagesUser, sendMessageUser } from "./services/messages.js";
import { messageError, messageInfo } from "./sweetalert.js";
import { printMessageUserLocal, printMessageFriend, cleanChat, printChatContact } from "./helpers/printElements.js";

const chatsContainer = document.querySelector('.chats__container');
const chatContainer = document.querySelector('.chat__container');
const headerUser = document.querySelector('.header__user');
const headerChat = document.querySelector('.header__chat');
const idUser = localStorage.getItem('idUser');

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
            let dataContact = await getDataUserContact(conversation,idUser);
            printChatContact(
                'C'+conversation.id+'C', 
                dataContact.image,
                dataContact.nombre.split(" ")[0],
                convertDateFormat(messages[0].date),
                messages[0].flag,
                messages[0].message
            );
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
            let searchValue = this.value.trimRight();
            findContact(searchValue);
        }
    });
    document.querySelector('.chats__search--input input').addEventListener('input', function(){
        if(this.value.trimRight() === ''){
            hiddenAllContacts();
        }
    });
    document.querySelector('.chats__search--figure').addEventListener('click', function(){
        let searchValue = document.querySelector('.chats__search--input input').value.trimRight();
        findContact(searchValue);
    });
}

async function findContact (searchValue) {
    let nodeListChatContact = document.querySelectorAll('.chat__contact');
    let arrayChatContact = [...nodeListChatContact];
    document.querySelector('.chats__search--input input').value = document.querySelector('.chats__search--input input').value.trimRight();
    const comparison = (description) => description.querySelector('.chat__description').querySelector('.chat__description--up p').textContent === searchValue || description.querySelector('.chat__description').querySelector('.chat__description--down p').textContent === searchValue;
    const elementFound = arrayChatContact.filter(comparison);
    if (elementFound!== undefined) {
        nodeListChatContact.forEach(element => {
            let aux = elementFound.find((item)=>item.id === element.id);
            if(aux=== undefined){
                element.style.display = 'none';
            }
        });
    } else {
        await messageInfo('No se encontraron resultados');
    }
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
            printMessageUserLocal(data.message,data.date,data.flag);
        }else{
            throw new Error('El Error al enviar el mensaje, intentelo mas tarde');
        }
    } catch (error) {
        messageError(error.message);
        console.error(error);
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
            hiddenAllContacts();
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
        cleanChat();
        messages.forEach(message => {
            if (message.userId.toString() === idUser.toString()) {
                printMessageUserLocal(message.message, convertFormatDateMessage(message.date), message.flag);
            } else {
                printMessageFriend(message.message,convertFormatDateMessage(message.date));
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
    cleanChat();
    chatContainer.style.display = 'none';
    headerChat.style.display = 'none';
    headerUser.style.display = 'flex';
    chatsContainer.style.display = 'flex';
});

function hiddenAllContacts(){
    let nodeListChatContact = document.querySelectorAll('.chat__contact');
    nodeListChatContact.forEach(element => {
        if(element.style.display === 'none'){
            element.style.display = 'flex';
        }
    });
}
