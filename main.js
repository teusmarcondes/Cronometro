//Seleciona todos os elementos com a classe "botao" e "aba-conteudo"
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Para cada botão, adiciona um evento de clique
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        // Remove a classe "ativo" de todos os botões e textos
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Adiciona a classe "ativo" ao botão e texto clicados
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Seleciona todos os elementos com as classes "contador0", "contador1", "contador2" e "contador3"
const contadores = document.querySelectorAll(".contador0, .contador1, .contador2, .contador3");

// Define as datas de objetivo
const tempoObjetivo1 = new Date("2024-10-02T00:00:00");
const tempoObjetivo2 = new Date("2024-12-15T00:00:00");
const tempoObjetivo3 = new Date("2024-12-20T00:00:00");
const tempoObjetivo4 = new Date("2025-01-13T00:00:00");

// Armazena os tempos de objetivo em um array
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

// Calcula o tempo restante até o objetivo
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

// Atualiza os cronômetros na página
function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    document.getElementById("dias1").textContent = calculaTempo(tempos[1])[0];
    document.getElementById("horas1").textContent = calculaTempo(tempos[1])[1];
    document.getElementById("min1").textContent = calculaTempo(tempos[1])[2];
    document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];

    document.getElementById("dias2").textContent = calculaTempo(tempos[2])[0];
    document.getElementById("horas2").textContent = calculaTempo(tempos[2])[1];
    document.getElementById("min2").textContent = calculaTempo(tempos[2])[2];
    document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];

    document.getElementById("dias3").textContent = calculaTempo(tempos[3])[0];
    document.getElementById("horas3").textContent = calculaTempo(tempos[3])[1];
    document.getElementById("min3").textContent = calculaTempo(tempos[3])[2];
    document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];

    // Para cada contador, atualiza o tempo restante
    for (let i=0; i<contadores.length;i++){
       /* contadores[i].textContent = calculaTempo(tempos[i]);   */
    }
}

// Inicia o cronômetro
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();