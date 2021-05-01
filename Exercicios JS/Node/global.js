/** Muito cuidado ao tocar o sistema global igual esse exemplo. Por isso é sempre
 * melhor preferir o sistema de módulos que é a forma padrão de se trabalhar com
 * o Node. Mas eventualmente, em algum cenário você pode querer ter um objeto global
 * que não precise fazer um require em cima dele
 */
// console.log(global)
globalThis.MinhaApp = Object.freeze ({ 
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})