function contagem(i){
    console.log(i)
    if (i <= 0 ){ //base case 
        return
    } else { //recursive case (retorna a ela mesma até acabar e ir para base)
        contagem( i - 1)
    }

}

contagem(5)