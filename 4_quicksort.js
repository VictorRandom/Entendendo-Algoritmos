function ProcuraRapida(array){
    if(array.length < 2){
        return array //base case
    }
    //recursive case
    var pivo = array [0]
    //sub-array de todos os elementos menores que o pivo
    var menor = array.slice(1).filter(function(el) {
        return el <= pivo
    })
    //sub-array de todos os elementos maior que o pivo
    var maior = array.slice(1).filter(function(el){
        return el > pivo
    })
    return ProcuraRapida(menor).concat([pivo], ProcuraRapida(maior))
}

console.log (ProcuraRapida([10, 5, 2, 3, 1, 33, 55, 182]))