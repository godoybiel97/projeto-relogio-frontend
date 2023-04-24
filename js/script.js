//Selecionar os elementos que serão modificados 
let relogioDigital = document.querySelector(".digital")
let segundos = document.querySelector(".p_s")
let minutos = document.querySelector(".p_m")
let horas = document.querySelector(".p_h")

//Criar uma função que seja atualizada a cada segundo
function atualizarHora() {
    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()

    //Utilização da função para fixar o zero
    relogioDigital.innerHTML = `${fixarZero(hora)}:${fixarZero(minuto)}:${fixarZero(segundo)}`

    //Calcular os segundos, minutos e horas de acordo com os graus de rotação dos ponteiros
    let sDeg = ((360 / 60) * segundo) - 90
    let mDeg = ((360 / 60) * minuto) - 90 //No CSS o 0° se inicia na vertical (3h pu 9h) ao invés de (12h)
    let hDeg = ((360 / 12) * hora) - 90

    segundos.style.transform = `rotate(${sDeg}deg`
    minutos.style.transform = `rotate(${mDeg}deg`
    horas.style.transform = `rotate(${hDeg}deg`
}

//A contagem das horas não inicia com 0, ou seja, os números menores de 10 não iniciam com 0. Portanto, vamos criar uma função para fixar o zero
function fixarZero(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}

//Criar um intervalo que atualize a função
setInterval(atualizarHora, 1000)
atualizarHora()