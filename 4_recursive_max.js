function maximo(lista){
    if (lista.length === 2){
        return lista[0] > lista[1] ? lista [0] : lista[1]
    }
    let sub_max = maximo(lista.slice(1))
    return lista[0] > sub_max ? lista[0] : sub_max
}

console.log(maximo([1, 5, 10, 25, 16, 1]))