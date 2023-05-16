"use strict";
const mainDiv = document.getElementById("cardComponent");
console.log("<<>>", mainDiv);
var url = "http://localhost:3000/user";

function rightFunction(id) {
  if (confirm("You sure?")) {
    document.getElementById(`card${id}`).remove();
  }
}

function leftFunction(id) {
  console.log(id, "hello left");
}

fetch(url, {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error: " + response.status);
  })
  .then(function (responseData) {
    let users = responseData.Data;

    const newUsers = users.reduce((acc, elem, idx) => {
      return (
        acc +
        `<div class="card" id=${`card` + (idx + 1)}>
          <img class="image-circle" src="image/hello.jpg" alt="Girl in a jacket">
          <div class="nameContainer">
          <p>${idx + 1}</p>
            <p class="name">${elem.name}</p>
            <p class="role">${elem.role}</p>
          </div>
          <button onClick="rightFunction(${idx + 1})">Right</button>
          <button onClick="leftFunction(${idx + 1})">Left</button>

        </div>
       `
      );
    }, "");

    mainDiv.innerHTML = newUsers;
  })
  .catch(function (error) {
    console.error(error);
  });
