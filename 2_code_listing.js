// O(n^2)


// 1. Achar o menor valor na Array - (Array aleatória)
function AcharMenorIndice(array){
    var MenorElemento = array[0] // Guardar o menor valor
    var MenorIndice = 0 //Guardar o indice do maior valor
    for (i = 1 ; i < array.length ; i++){
        if (array[i] < MenorElemento){
            MenorElemento = array[i]
            MenorIndice = i
        }
    }
    return MenorIndice
}


// 2. Colocar a Array em ordem 
function Ordenar (array){
    var OrdenarArray = []
    var length = array.length

    for(var i = 0 ; i < length ; i++){
        //Achar o menor elemento da Array
        var MenorElemento = AcharMenorIndice(array)
        //Adicionar o menor elemento na nova Array
        OrdenarArray.push(array.splice(MenorElemento, 1)[0])
    }
    return OrdenarArray
}

console.log(Ordenar([5, 3, 6, 2, 10]))