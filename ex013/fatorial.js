function fatorial(n){
    let fatorial = 1
    for(let c = n;c > 1;c--){
        fatorial *= c         
    }

    return fatorial
}

console.log(fatorial(5))