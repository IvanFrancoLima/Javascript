let valores = []    //Vetor que vai guardar todos os valores
let chamada = window.document.querySelector('#Adicionar') // Varíavel que vai guardar a chamada para a função
let finalizar = window.document.querySelector('#final')
let select = window.document.getElementsByTagName('select')[0] //tag do html ao qual vou adicionar childs
let main = window.document.getElementsByTagName('main')[0] //tag do html ao qual vou adicionar 
let results = window.document.createElement('p')

chamada.addEventListener('click',adicionar) // Função de adicionar números
finalizar.addEventListener('click',resultados) //Função para exibir os resultados


function maior(){
    let maior = 0
    for(let cont=0;cont<=valores.length;cont++){
        if(valores[cont]>maior){
            maior = valores[cont]
        }
    }
    return maior
}

function menor(){
    let menor = 0
    for(let cont=0;cont<=valores.length;cont++){
        if(valores[cont]<menor || menor == 0){
            menor = valores[cont]
        }
    }
    return menor
}

function soma(){
    let somatorio = 0
    for(let cont in valores){
        somatorio += valores[cont]
    }

    return somatorio 
}

function pares(){
    let par = 0
    for(let cont=0;cont<=valores.length;cont++){
        if(valores[cont]%2==0){
            par += 1
        }
    }
    return par
}

function conferencia(numero){
    if(valores.indexOf(numero)!= -1){
        return 'incorreto'
    }else{
        return 'correto'
    }
}

function adicionar(){
    let num = Number(window.document.getElementById('vetor').value) //Número inserido pelo usuário
    let verificar = conferencia(num) //Variável funcional para conferir se o num já existe no vetor
    
    if(num<1 || num>100 || num=='' || verificar=='incorreto'){ //condições para ser válido
        window.alert('Você digitou valores inválidos')
    }else{
        results.innerHTML = ''
        let msg = window.document.createElement('option')//Criando a tag que vai mostrar o número inserido
        select.appendChild(msg)

        msg.innerHTML+=`Número ${num} adicionado`
        valores.push(num)
    }
}

function resultados(){
    results.innerHTML = ''
    main.appendChild(results)//Tornando a tag p child do main para exibir os resultados

    //Resultados
    results.innerHTML+=`O maior número digitado foi  ${maior()}<br>`
    results.innerHTML+=`O menor número digitado foi  ${menor()}<br>`
    results.innerHTML+=`O soma dos números digitado foi  ${soma()}<br>`
    results.innerHTML+=`A quantidade de números pares digitados foi de  ${pares()}<br>`
}
