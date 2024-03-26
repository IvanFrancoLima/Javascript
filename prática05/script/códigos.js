let valores = []    //Vetor que vai guardar todos os valores
let chamada = window.document.querySelector('#Adicionar') // Varíavel que vai guardar a chamada para a função
let main = window.document.getElementsByTagName('select')[0] // tag Main do html ao qual vou adicionar childs

chamada.addEventListener('click',adicionar) // Função de adicionar números

function adicionar(){
    let num = Number(window.document.getElementById('vetor').value) //Número inserido pelo usuário

    if(num<1 || num>100 || num==''){ //condições para ser válido
        window.alert('Você digitou valores inválidos')
    }else{
        let msg = window.document.createElement('option')
        main.appendChild(msg)

        msg.innerHTML+=`Número ${num} adicionado`
        valores.push(num)
    }
}
