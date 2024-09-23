let intervalId;
let timeoutId;

function limparOutput() {
    document.getElementById('output').innerHTML = '';
}

function setar() {
    const tempo = parseInt(document.getElementById('inserir').value, 10);
    if (!isNaN(tempo) && tempo > 0) {
        limparOutput();
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            document.getElementById('output').innerHTML += `Printando usando SetInterval<br>`;
        }, tempo);
    } else {
        document.getElementById('output').innerHTML += "Por favor, insira um número válido de milissegundos.<br>";
    }
}

function parar() {
    clearInterval(intervalId);
    document.getElementById('output').innerHTML += "SetInterval parado.<br>";
}

function timeout() {
    const tempo = parseInt(document.getElementById('inserir').value, 10);
    if (!isNaN(tempo) && tempo > 0) {
        limparOutput();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            document.getElementById('output').innerHTML += `Printando usando SetTimeout<br>`;
        }, tempo);
    } else {
        document.getElementById('output').innerHTML += "Por favor, insira um número válido de milissegundos.<br>";
    }
}
