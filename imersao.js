const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi bi-play-btn-fill");
    botaoPlayPause.classList.add("bi bi-pause-btn");
    audio.play();
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi bi-play-btn-fill");
    botaoPlayPause.classList.remove("bi bi-pause-btn");
    audio.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);
