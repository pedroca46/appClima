const key = 'c6c69ec9374f2d92c09f8c8cf639bbe5'

function colocarDadosNaTela(dados) {
    console.log(dados)
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
   
}


function cliqueiNoBotao() {
    const cidade = document.getElementById('cidade').value
    buscarCidade(cidade)
}