const AcharMenor = (arr) => {
    let Menor = arr[0]
    let MenorIndice = 0
    let ArrLen = arr.length

    for ( i = 0 ; i < ArrLen ; i++){
        if(arr[i] < Menor){
            Menor = arr[i]
            MenorIndice = i            
        }
    }
    return MenorIndice
}

const Ordenar = (arr) => {
    if (!arr.length ) return []
    let Menor = arr.splice(AcharMenor (arr), 1)
    return Menor.concat( Ordenar (arr))
}

let arr = [5, 3, 6, 2, 22, 10];

console.log( Ordenar(arr) );