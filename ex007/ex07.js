velocidade = 40
console.log(`A sua velocidade é de ${velocidade} km por hora`)
if (velocidade>60){
    console.log('Você passou do limite de velocidade MULTA!')
        if(velocidade>=90){
            console.log('A sua habilitação foi suspença')
        }
}else{
    console.log('Parabéns fez o mínimo')
}