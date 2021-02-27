function area (largura, altura){
    const area = largura * altura
    if (area>20){
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log (`Area menor que 20: ${area(2,2)}`)
console.log (`Passando 1 parâmetro: ${area(2)}`) // Pode passar apenas um parâmetro. Retornará NaN
console.log (`Passando nenhum parâmetro: ${area()}`) // Pode não passar parâmetro. Retornará NaN
console.log (`Passando mais de 2 parâmetros: ${area(2,3,4,5)}\n`) // Pode passar mais parâmetros do que precisa, 
// porém ele vao pegar os dois primeiros e vai ignorar o resto
console.log (`Area maior que 20: ${area(5,5)}`)