"use strict";
console.log("Welcome to Type Script");
function startGame() {
    var messagesDiv = document.querySelector("#messages");
    messagesDiv.innerHTML = "Welcome to type script";
}
document.querySelector("#startGame").addEventListener("click", startGame);
//# sourceMappingURL=app.js.map