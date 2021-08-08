function AcharChave(caixa_principal){
    let pilha = caixa_principal.fazer_uma_pilha()
    
    while(pilha_nao_vazia){
        caixa = pilha.pegar_uma_caixa()
        for(item in caixa){
            if(item.esta_na_caixa()){
                pilha.append(item)
            } else if (item.e_a_chave()){
                console.log("Achou a chave!")
            }
        }
    }

}