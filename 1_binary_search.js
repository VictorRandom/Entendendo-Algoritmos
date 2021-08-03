function binary(lista, item){
    var baixo = 0
    var alto = lista.length - 1 //-1 porque começa a contagem do 0

    while (baixo <= alto) { //reduzir até um elemento
        var meio = Math.floor((baixo + alto) / 2) // checar o elemento do meio, Math.floor para retornar o menor numero
        var teste = lista[meio]
        
        if(teste == item){ 
            return meio // encontrar o elemento (do meio)
        }
        if(teste > item){ //se o chute for muito alto
            alto = meio -1 // o valor alto muda para o valor abaixo do meio
        } else { //se o chute for muito baixo
            baixo = meio +1 // o valor baixoo muda para o valor acima do meio
        }

    }
    return null //se não tiver na lista
}

var minha_lista = [1, 3, 5, 7, 9]

console.log (binary(minha_lista, 3)) //1
console.log (binary(minha_lista, -1)) //null