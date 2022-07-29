const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

const pacientes = [];

app.post('/pacientes/cadastro', (request, response) => {
    const validarPacientes = pacientes.find((validacao) => validacao.nºficha == request.body.nºficha)
        if (validarPacientes){
            return response.send("Status: Paciente já Existe.")}
        
        pacientes.push({
        id: uuid.v4(),
        nome: request.body.Nome,
        nºficha: request.body.nºficha,
        senha:request.bory.senha
    })
    return response.send("Status: Paciente Cadastrado")
})