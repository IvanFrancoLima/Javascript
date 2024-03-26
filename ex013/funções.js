function calculo(num){
    if(num%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let parouimpar = calculo(8)

console.log(`${parouimpar}`)
console.log(`O número 8 é `+ calculo(8))