import "../sass/style.scss";
import { convertDateFormat, convertFormatDateMessage, getCurrentDateInFormat } from "./helpers/functions.js";
import { userById, updateInfoUser } from "./services/users.js";
import { getConversationsUser,getConversationById } from "./services/conversations.js";
import { getMessagesUser, sendMessageUser } from "./services/messages.js";
import { messageError, messageInfo, messageSuccess } from "./sweetalert.js";
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
        document.querySelector('.modal__image--figure img').src = dataUser.image;
        document.getElementById('name').value = dataUser.nombre;
        document.getElementById('image').value = dataUser.image;
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
        if (window.innerWidth < 600) {
            headerChat.style.display = 'none';
            chatContainer.style.display = 'none';
        }
        hiddenChatWithMessage(lastMessagesReceived[0].conversationId);
        addEventFindContact();
        addEventSendMessage();
        addEventEditProfile();
        addEventFindMessages();
    } catch (error) {
        messageError(error.message);
        console.error(error);
    }
}

function addEventFindMessages(){
    document.querySelector('#searchInput input').addEventListener("keydown", function (event) { 
        if (event.keyCode === 13) { 
            event.preventDefault();
            let searchValue = this.value.trimRight();
            findMessages(searchValue);
        }
    });
    document.querySelector('#searchInput input').addEventListener("input", function(){
        if (this.value.trimRight()==='') {
            document.getElementById('searchResults').innerHTML = '';
        }
    })
}

async function findMessages(searchValue){
    let nodeListChatContact = document.querySelectorAll('.message__box');
    let arrayChatContact = [...nodeListChatContact];
    document.querySelector('#searchInput input').value = document.querySelector('#searchInput input').value.trimRight();
    const comparison = (description) => description.querySelector('p').textContent.includes(searchValue);

    const elementFound = arrayChatContact.filter(comparison);
    console.log('elementFound',elementFound);
    if (elementFound.length > 0) {
        elementFound.forEach(element => {
            console.log(element);
            document.getElementById('searchResults').innerHTML += element.outerHTML;
        });
    } else {
        await messageInfo('No se encontraron resultados');
    }
}

function addEventEditProfile(){
    document.querySelector('.header__user--figure').addEventListener('click', function (){
        document.querySelector('.modal__container').style.display = 'block';
    });
    document.querySelector('.modal__header--figure').addEventListener('click', function(){
        document.querySelector('.modal__container').style.display = 'none';
    });
    document.getElementById('editName').addEventListener('click', function () {actionEditImageOrName('name');});
    document.getElementById('sendName').addEventListener('click', function(){actionSendImageOrName('name')});
    document.getElementById('editImage').addEventListener('click', function() {actionEditImageOrName('image');});
    document.getElementById('sendImage').addEventListener('click', function(){actionSendImageOrName('image')});
}

async function actionSendImageOrName(election){
    try {
        let value = document.getElementById(election).value.trimRight();
        if(value !== ''){
            let dataUser = await userById(idUser);
            if (election === 'name') {
                dataUser.nombre = value;
            } else {
                dataUser.image = value;
            }
            let response = await updateInfoUser(idUser,dataUser);
            if(response.status === 200){
                await messageSuccess(
                    `Su ${election === 'name'?'nombre':'imagen'} se cambio con Exito`, 
                    ()=>{
                        document.getElementById(election).blur();
                        document.getElementById(election).disabled = true;
                        let sendId = election === 'image' ? 'sendImage' : 'sendName';
                        document.getElementById(sendId).style.display = 'none';
                        if(election==='image'){
                            document.querySelector('.header__user--figure img').src = dataUser.image;
                            document.querySelector('.modal__image--figure img').src = dataUser.image;
                        }
                    }
                );
            }else{
                throw new Error(`No se pudo cambiar ${election === 'name'? 'el nombre': 'la imagen'} del usuario`);
            }
        }
    } catch (error) {
        messageError(error.message);
        console.error(error);
    }
}

function actionEditImageOrName(election){
    document.getElementById(election).disabled = false;
    document.getElementById(election).focus();
    let sendId = election === 'image' ? 'sendImage' : 'sendName';
    document.getElementById(sendId).style.display = 'flex';
    let disabledId = election == 'image'? 'name' : 'image';
    let displayId = election == 'image'? 'sendName' : 'sendImage';
    if (document.getElementById(disabledId).disabled === false) {
        document.getElementById(disabledId).disabled = true;
        document.getElementById(displayId).style.display = 'none';
    }

}

function addEventFindContact(){
    document.querySelector('#findChat input').addEventListener("keydown", function (event) { 
        if (event.keyCode === 13) { 
            event.preventDefault();
            let searchValue = this.value.trimRight();
            findContact(searchValue);
        }
    });
    document.querySelector('#findChat input').addEventListener('input', function(){
        if(this.value.trimRight() === ''){
            hiddenAllContacts();
        }
    });
    document.querySelector('.chats__search--figure').addEventListener('click', function(){
        let searchValue = document.querySelector('#findChat input').value.trimRight();
        findContact(searchValue);
    });
}

async function findContact (searchValue) {
    let nodeListChatContact = document.querySelectorAll('.chat__contact');
    let arrayChatContact = [...nodeListChatContact];
    document.querySelector('#findChat input').value = document.querySelector('#findChat input').value.trimRight();
    const comparison = (description) => description.querySelector('.chat__description').querySelector('.chat__description--up p').textContent.includes(searchValue) || description.querySelector('.chat__description').querySelector('.chat__description--down p').textContent.includes(searchValue);
    const elementFound = arrayChatContact.filter(comparison);
    console.log('elementFound',elementFound);
    if (elementFound.length > 0) {
        nodeListChatContact.forEach(element => {
            let aux = elementFound.find((item)=>item.id === element.id);
            if(aux === undefined){
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
            if(this.value.trimRight() !== ''){
                sendMessage(this.value);
                this.value = '';
            }
        }
    });
    document.getElementById('sendMessage').addEventListener('click',function(){
        if(this.value.trimRight() !== ''){
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
            printMessageUserLocal(data.message,convertFormatDateMessage(data.date),data.flag);
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
                if (window.innerWidth < 600) {
                    headerChat.style.display = 'flex';
                    chatContainer.style.display = 'block';
                    headerUser.style.display = 'none';
                    chatsContainer.style.display = 'none';
                }
                hiddenChatWithMessage(id.replace('C','').replace('C',''));
            });
        });
    }
}

async function hiddenChatWithMessage(idConsersation){
    try {
        if(document.querySelector('#findChat input').value.trimRight()!== ''){
            hiddenAllContacts();
            document.querySelector('#findChat input').value = '';
        }
        let conversationData = await getConversationById(idConsersation);
        let userChat = await getDataUserContact(conversationData, idUser);
        document.querySelector('.header__chat--figure img').src = userChat.image;
        document.querySelector('.header__chat--text--name').textContent = userChat.nombre.split(" ")[0];
        document.querySelector('.header__chat--text--state').textContent = userChat.state === "true" ? "EN LINEA" : userChat.fechaConexion;
        let usuario = document.querySelector('.header__chat--text--name').textContent;
        let usuario2 = document.querySelector('.traerusuario');
        usuario2.textContent = "Mensajes con "+usuario;
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
            headerChat.style.display = 'flex';
            chatContainer.style.display = 'block';
        } else if(chatContainer.style.display === 'none' && headerChat.style.display === 'none'){
            headerChat.style.display = 'flex';
            chatContainer.style.display = 'block';
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


document.getElementById("openMenuButton").addEventListener("click", function() {
    document.getElementById("menuModal").style.display = "block"; 
});
  

  document.getElementById("closeMenuButton").addEventListener("click", function() {
    document.getElementById("menuModal").style.display = "none";
});