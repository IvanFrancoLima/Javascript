//função padrão de fatorial

function fatorial(num){
    let fator = num
    for(cont = num-1;cont>1;cont--){
        fator *= cont        
    }
    return fator
}

num = 5
var result = fatorial(num)

console.log(`O fatorial de ${num} é ${result}`)