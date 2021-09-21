let graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

function vendedorManga(name){
    return name[name.length - 1] == "m"; //ultima letra do nome da pessoa é M
}

function procurar(name){
    let procurarPilha = [];
    procurarPilha = procurarPilha.concat(graph[name]) //concat cria um novo array juntando os anteriores

    const proucurado = []
    //para saber as pessoas que já foram proucuradas

    while(procurarPilha.length){
        let pessoa = procurarPilha.shift() //shift separa o 1 elemento do restante do array
    
        if(proucurado.indexOf(pessoa) === -1){ //indexOf verifica se o valor está no array, se estiver retona 0, se NÃO estiver retorna -1
                                               // aqui está verificando se a pessoa já foi proucurada ou não, se não, continuar
            if(vendedorManga(pessoa)){
                console.log(pessoa + " é o vendedor de manga")
                return true
            }
            
            procurarPilha = procurarPilha.concat(graph[pessoa]);

            proucurado.push(pessoa) //adicionar pessoa pesquisada a lista dos já proucurados

        }
    }

    return false //caso não tenha nenhum vendedor de manga

}

procurar("you")