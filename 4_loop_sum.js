function somar(array){ //colocar os numeros
    let total = 0 //soma dos numeros
    for (var x = 0; x < array.length ; x++){ //soma o valor da array pelo looping do for
        total += array[x]
    }
    return total
}

console.log(somar([1, 2, 3, 4])) //resultado da soma 10