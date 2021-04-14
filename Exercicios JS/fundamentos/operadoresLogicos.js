function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //OU
    const comprarTv50 = trabalho1 && trabalho2 //E
    const comprarTv32 =  trabalho1 != trabalho2 // OU exclusivo
    const manterSaudavel = !comprarSorvete //Negação

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))