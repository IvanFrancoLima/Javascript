var vetor = [5,8,11]
vetor.push(20)

for(let pos = 0;pos<vetor.length;pos++){
    console.log(vetor[pos])
}

if (vetor.indexOf(8) == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 8 está posição ${vetor.indexOf(8)}`)
}