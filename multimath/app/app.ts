console.log("Welcome to Type Script");

function startGame() {
    let messagesDiv = document.querySelector("#messages");
    messagesDiv!.innerHTML = "Welcome to type script";
}

document.querySelector("#startGame")!.addEventListener("click", startGame);