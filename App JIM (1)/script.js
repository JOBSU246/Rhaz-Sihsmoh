/*function showVhide() {
    var content,sheet
    content = document.querySelector('.main')
    sheet = document.querySelector('.sheet')
    if (content.style.display = 'block') {
        content.style.display = 'none'}
}*/
document.getElementById('toggleBtn').addEventListener('click', function() {
    // Alternar a classe 'collapsed' na barra lateral
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main').classList.toggle('collapsed');
});

// HISTORICO

function getCurrentTime() {
    var now = new Date();
    var hour = now.getHours().toString().padStart(2, '0');
    var minute = now.getMinutes().toString().padStart(2, '0');
    return "[" + hour + ":" + minute + "]";
}

function sendMessage() {
    var currentTime = getCurrentTime();
    var chatDiv = document.querySelector(".hist");
    var turmaSelect = document.getElementById("turmaSelect");
    var selectedTurma = turmaSelect.options[turmaSelect.selectedIndex].text;
    var codigoSelect = document.getElementById("codigoSelect");
    var selectedCodigo = codigoSelect.options[codigoSelect.selectedIndex].text;
    var penaltyPoints = {
        "C01": 15,
        "C02": 10,
        "C03": 5,
        "C04": 20,
        "C05": 25,
        "C06": 30,
        "C07": 9,
        "C08": 18,
        "C09": 27
    };
    var points = penaltyPoints[selectedCodigo];

    // Create elements using DOM methods
    var p = document.createElement("p");
    var timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = currentTime;
    p.appendChild(timeSpan);

    var turmaSpan = document.createElement("span");
    turmaSpan.textContent = selectedTurma;
    p.appendChild(turmaSpan);

    var penaltyText = document.createTextNode(" - Penalidade de " + points + " pontos - ");
    p.appendChild(penaltyText);

    var codigoSpan = document.createElement("span");
    codigoSpan.className = "rulecode";
    codigoSpan.textContent = selectedCodigo;
    codigoSpan.style.textDecoration = "underline"; // Add underline to codigoSpan
    p.appendChild(codigoSpan);

    chatDiv.appendChild(p);
}

function toggleChat() {
    var sendButton = document.querySelector(".chat-input button");
    var chatArea = document.getElementById("chatArea");

    if (sendButton.disabled) {
        sendButton.disabled = false;
        chatArea.style.display = "block"; // Exibe a área de chat
    } else {
        sendButton.disabled = true;
        chatArea.style.display = "none"; // Esconde a área de chat
    }
}