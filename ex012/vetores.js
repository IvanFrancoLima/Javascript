var vagas = [3,2,1]
vagas[3] = 8
vagas.push(10)

for(var cont = 0;cont<=4;cont++){
    console.log(`${vagas[cont]}`)
}

console.log(`O comprimento de todo o meu vetor é de ${vagas.length}`)

vagas.sort()

for(var cont = 0;cont<=4;cont++){
    console.log(`${vagas[cont]}`)
}