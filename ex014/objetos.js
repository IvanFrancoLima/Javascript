//Arrays aceitam valores de tipos diferentes

let ivan = {
    produto:'bola',
    idade:20,
    altura:178,
    peso:67,
    imc(p=0){
        console.log('Engordou')
        this.peso += p //This é uma referência ao própio objeto
    }} //Primeiro vem o índice (produto:) e depois o valor do objeto(bola)

ivan.imc(5)

console.log(`O ivan tem ${ivan.idade} anos e pesa ${ivan.peso} kg`) //primeiro a variavel e depois o índice/atributo