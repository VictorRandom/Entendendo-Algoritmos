
let voted = {}

function checkVoter(name){
    if (voted[name]){
        console.log("Coloque ele para fora")
    } else {
        voted[name] = true
        console.log("Pode votar")
    }
}

checkVoter("tom"); // pode votar
checkVoter("mike"); // pode votar
checkVoter("mike"); // coloque ele para fora (já votou)

console.log(voted) // vendo os nomes que estão sendo gravados na lista