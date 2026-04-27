//https://brasilapi.com.br/api/cep/v1/{cep}

'use strict'

async function getDadosCep(cep){
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preecherFormulario(){
    const cep = document.getElementById('cep').value
    // const cep = evento.target.value

    const dadosCep = await getDadosCep(cep)

    document.getElementById('endereco').value = dadosCep.street
    document.getElementById('bairro').value = dadosCep.neighborhood
    document.getElementById('cidade').value = dadosCep.city
    document.getElementById('estado').value = dadosCep.state
}

//addEventListener() recebe dois argumentos
document.getElementById('cep').addEventListener('focusout', preecherFormulario)