const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

const pacientes = [];
const emfermeiras = [];

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

app.post('/emfermeiras/cadastrar', (request, response) => {
    const validarEmfermeiras = emfermeiras.find((emfermeira) => emfermeira.corem == request.body.corem)
        if (validarEmfermeiras){
            return response.send("Erro: emfermeira ja existe.")}

        emfermeiras.push({
        id: uuid.v4(),
        nome: request.body.nome,
        corem: request.body.corem,
        senha: request.body.senha
    })
    return response.send("Status: Emfermeira cadastrado com sucesso.")
    })

app.post('/login/pacientes', (request, response) => {
    const loginPacientes = pacientes.find((paciente) => paciente.nºficha == request.body.nºficha && paciente.senha == request.body.senha)
    if(loginPacientes){
        return response.send("status: Seja bem vindo")
    }
    else{
        return response.send("erro: Nºficha ou Senha incorretos")
    }
})

app.post('/login/emfermeiras', (request, response) => {
    const loginemfermeiras = emfermeiras.find((tec) => tec.corem == request.body.crm && corem.senha == request.body.senha)
    if(loginemfermeiras){
        return response.send("status: Seja bem vindo")
    }
    else{
        return response.send("erro: Crm ou Senha incorretos")
        }
    })

app.get('/listar/pacientes', (request, response) => {
    console.log(request.body);
    return response.json(pacientes)
})

app.get('/listar/emfermeiras', (request, response) => {
    console.log(request.body);
    return response.json(emfermeiras)
})

app.delete('/excluir/pacientes', (request,response) => {
    const id = pacientes.indexOf('id');
    const excluirPacientes = pacientes.splice(id,1)
            
    return response.send(excluirPacientes)
    })

app.delete('/excluir', (request,response) => {
    const id = emfermeiras.indexOf('id');
    const excluirEmfermeiras = emfermeiras.splice(id,1)
            
    return response.send(excluirEmfermeiras)
    })

app.listen(5000, () => {
    console.log('Status: Siatema Funcionando...')
    })