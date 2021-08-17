function contar(lista){
    if(lista.length == 0){
        return 0
    }
    return 1 + contar(lista.slice(1))

}

console.log(contar([0, 1, 2, 3, 4, 5]))