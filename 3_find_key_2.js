function Procurar_Chave(caixa){
    for (item in caixa){
        if (item.esta_na_caixa()){
            Procurar_Chave(item) //recursion
        } else if (item.e_a_chave()){
            console.log("Achou a chave!")
        }
    }
}