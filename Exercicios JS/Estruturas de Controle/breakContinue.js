//Exemplo para demonstração. Evite utilizar esse padrão
//Existem alternativas mais interessantes e elegantes utilizando-se funções

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break // Age sobre o bloco for
    }

    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue //Interrompe a repetição atual e vai para próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('\nFOR EXTERNO: ')

externo: for (a in nums){ // EVITE ESSA ESTRUTURA. SÓ PARA DEMONSTRAÇÃO
    for(b in nums){
        if(a == 2 && b == 3){
            // break //break do for mais interno
             break externo //Break para o for externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}