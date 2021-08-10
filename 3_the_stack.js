function cumprimentar2(nome){ //criando funções para utilizar na pilha
    console.log('como está você, ' + nome + ' ?')
}

function tchau(){ //criando funções para utilizar na pilha
    console.log("ok, tchau.")
}


//utilizando as funções e usando novas
function cumprimentar(nome){
    console.log("Ola " + nome + " !")
    cumprimentar2(nome)
    console.log("Preparando para dizer tchau")
    tchau()
}


//dando valores à " nome "
cumprimentar("Victor")