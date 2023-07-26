const key = 'c6c69ec9374f2d92c09f8c8cf639bbe5'

function colocarDadosNaTela(dados) {
    document.getElementById('cidade').innerHTML = `Tempo em ${dados.name}`
    document.getElementById('temp').innerHTML = Math.round(dados.main.temp) + '°C'
    document.getElementById('previsao').innerHTML = dados.weather[0].description
    document.getElementById('umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
   
}


function cliqueiNoBotao() {
    const cidade = document.getElementById('input-cidade').value
    buscarCidade(cidade)
}