const chatMessages = document.querySelector('.chat__menssages');
const chatsContacts = document.querySelector('.chats__contacts');

export function cleanChat() {
    chatMessages.innerHTML = '';
}

export function printMessageUserLocal(message, date, flag){
    chatMessages.innerHTML += `
    <div class="message__box message__my">
        <p>${message.replace(new RegExp('\n', 'g'), '<br>')}
            <span>${date}
                <img class="message__see" src=${flag === 'true' ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'} alt="">
            </span>
        </p>
    </div>
    `;
}

export function printMessageFriend(message,date){
    chatMessages.innerHTML += `
    <div class="message__box message__friend">
        <p>${message.replace(new RegExp('\n', 'g'), '<br>')}<br><span>${date}</span></p>
    </div>
    `;
}

export function printChatContact(idElement,image,name,date,flag,message){
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
                <img src=${flag === "true" ? 'https://i.ibb.co/1ZY2Jfh/see-hidden.png' : 'https://i.ibb.co/StygMHQ/see.png'} alt="">
                <p>${formatMessageConvert(message)}</p>
            </div>
        </div>
    </div>
    `;
}

function formatMessageConvert(message){
    message = message.replace(new RegExp('\n', 'g'), ' ');
    if (message.length > 25) {
        message = message.slice(0,25)+"...";
    }
    return message;
}