let alertMsg = document.getElementById("alert")


function playerInfo() {
    let playerName = document.getElementById("player-name").value;
    let amount = document.getElementById("amount").value;
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('amount', parseInt(amount));

    playerName && amount ? redirect() : alertMsg.textContent = "Fill the Details"

}

function redirect(){
    window.location.href = 'game.html'
    let script = document.createElement('script');
    script.src = 'game.js';
    document.body.appendChild(script);
}
