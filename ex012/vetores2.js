let vet = [8,45,13,46,78,8]

for(let cont = 0;cont<=5;cont++){
    for(let conts = cont + 1;conts<=5;conts++){
        if(vet[cont]>vet[conts]){
            let auxiliar = vet[cont]
            vet[cont] = vet[conts]
            vet[conts] = auxiliar
        }
    }
}