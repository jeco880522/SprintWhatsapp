import "../sass/style.scss";
import { getConversationsUser } from "./services/conversations";
import { getMessagesUser } from "./services/messages";

const chatsContacts = document.querySelector("chats__contacts");

function initChat(){
    buildChatsContacts();
}

async function buildChatsContacts(){
    try {
        const idUser = localStorage.getItem('idUser');
        let conversations =  await getConversationsUser(idUser);
        conversations.array.forEach( async (conversation) => {
            conversation.id;
        });
        chatsContacts.innerHTML+= `
        <label class="chat__contact" for="">
            <figure class="chat__contact--figure">
                <img src="../../images/user.jpg" alt="">
            </figure>
            <div class="chat__description">
                <div class="chat__description--up">
                    <p>Ingrid</p>
                    <p>Viernes</p>
                </div>
                <div class="chat__description--down">
                    <img src="../../images/see.png" alt="">
                    <p>Hola Adriana, ¿Como has estado?</p>
                </div>
            </div>
        </label>
        `;
    } catch (error) {
        
    }
}

initChat();