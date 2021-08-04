

const batch = 1; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

// Your turn to code!

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select the input, button, list
const message = document.querySelector("#your-message");
// const name = document.querySelector("#your-name");
// const search = document.querySelector("#submit-button");
const results = document.querySelector("#messages");
const refresh = document.querySelector("#refresh");
const form = document.querySelector(".input-msg form");

// 2. Listen to a click on the button
// refresh.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event);
  // 2.5 Fetch the OMDBAPI
const url = `${baseUrl}/656/messages/`;
fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data.messages);
    const array = data.messages;
    results.innerHTML = "";
    array.forEach((mes) => {
    //   console.log(message);
    const html = `<div class="message">
    <img src="https://kitt.lewagon.com/placeholder/users/cveneziani" alt="">
    <div class="message-content">
      <p><strong>${mes.author}</strong></p>
      <p>${mes.content}</p>
    </div>
  </div>`;
    results.insertAdjacentHTML("beforeend", html);
    });
});
// });

// // //////////////////////
// // HTTP POST request
// // //////////////////////

const mewFunction = (event) => {
  event.preventDefault();
  const text = { author: `Mew`, content: `${message.value}` };
  console.log(text);
  console.log(message.value);
  const url = `${baseUrl}/656/messages/`;
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(text)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
    window.setTimeout(window.location.reload.bind(window.location), 200)  
};
// const text = { author: "Mew", content: "asdojiasdas" };
// const url = `${baseUrl}/656/messages/`;
// fetch(url, {
//   method: 'POST',
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(text)
// })
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
// });

form.addEventListener("submit", mewFunction);
