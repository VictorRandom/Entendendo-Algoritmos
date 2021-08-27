function SomaRecursiva(array){
    if(array.length == 1){
        return array[0]
    } 
        return array[0] + SomaRecursiva(array.slice(1))

}

console.log(SomaRecursiva([1, 2, 3, 4]))