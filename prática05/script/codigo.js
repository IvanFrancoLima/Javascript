//Variáveis universais
var lista = window.document.querySelector('#vetor')
var vetor = []
var msg = window.document.createElement('p')
var documento = window.document.getElementsByTagName('main')[0]
var barra = window.document.querySelector('input#numero')

//Checando se o número já existe no Vetor
function checagem(teste){ 
    let resultado = 0
    for(contador = 0;contador<=vetor.length;contador++){
        if (vetor[contador] == teste){
            resultado = 1
        }
    }
    return resultado
}

//Vendo qual número é o maior
function maiornumero(num){
    for(contador = 0;contador<=vetor.length;contador++){
        if(vetor[contador] > num){
            num = vetor[contador]
        }
    }
    return num
}

//Vendo qual número é o menor
function menornumero(num){
    for(contador = 0;contador<=vetor.length;contador++){
        if(num == 0 || vetor[contador]<num){
            num = vetor[contador]
        }
    }
    return num
}

//Media dos valores
function media(num){
    for(contador = 0;contador<vetor.length;contador++){
        num += vetor[contador]
    }
    return num/vetor.length
}


//Botão de adicionar números no site
function adicionar(){   

    //variáveis temporárias
    let numero = Number(window.document.querySelector('input#numero').value)
    let itens = window.document.createElement('option')
    let verify = checagem(numero)

    if(numero == ''){
        window.alert('Você não digitou nada,por favor digite um número')
    }else if(verify == 1){
        window.alert(`Não repita números`)
    }else{
        vetor.push(numero)
        lista.appendChild(itens)
        itens.innerText=`Número ${numero} adicionado`
    }
    

}

//Botão para finalizar 
function finalizar(){
    msg.innerHTML=``
    if(vetor == ''){
        window.alert('Digite números para continuar')
    }else{
        let maior = maiornumero(0)
        let menor = menornumero(0)
        let mediaresult = media(0)

        documento.appendChild(msg)

        msg.innerHTML+=`<p>O total de números digitados foi de ${vetor.length}</p>`
        msg.innerHTML+=`<p>O maior número digitado foi ${maior}</p>`
        msg.innerHTML+=`<p>O menor número digitado foi ${menor}</p>`
        msg.innerHTML+=`<p>A média dos valores digitados foi de ${mediaresult.toFixed(2)}</p>`
    }
}