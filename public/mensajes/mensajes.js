let messageBox = document.getElementById("msgBox");
let sendMessage = document.getElementById("msgSendBtn");
let lastMessage = document.getElementById("latestMessage");

sendMessage.addEventListener("click", postMessage)

function postMessage() {
    let messageToSend = document.getElementById("msgToSend").value;
    let insertHTML = `<div class="outgoing_msg">
    <div class="sent_msg">
      <p>${messageToSend}</p>
       </div>`
    messageBox.insertAdjacentHTML("beforeend",insertHTML);
    document.getElementById("msgToSend").value = "";
    lastMessage.innerText=messageToSend;
}