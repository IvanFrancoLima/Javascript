var vetor = [9,5,3,1,7]


for(vet = 0;vet <= vetor.length;vet++)
    for(cont = vet + 1;cont<vetor.length;cont++){
        if(vetor[vet] > vetor[cont]){
            let guardar = vetor[vet]
            vetor[vet] = vetor[cont]
            vetor[cont] = guardar
        }
    }
console.log(vetor)



