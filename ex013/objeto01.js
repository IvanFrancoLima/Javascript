let perfil = {nome:'jose',
sexo:'M',
peso:85.4,
engordar(p){
    this.peso+= p
    console.log(`engordou`)
}}

perfil.engordar(10)
console.log(`O ${perfil.nome} do sexo ${perfil.sexo} está com ${perfil.peso}`)
