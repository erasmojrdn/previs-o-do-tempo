let chave = "703fb42d70fa7e6ffe256eab6ee3de6e"

function colocarNaTela(dados) {

    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
async function buscarcidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=703fb42d70fa7e6ffe256eab6ee3de6e&units=metric").then(resposta => resposta.json())


    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}
