const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() /* Pega o nome da tag (div, span, ul, etc).  elemento = elemento, tagName = nome do elemento, to.LowerCase() = letras em minúsculo*/
    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){ /** Se na lista de classes do html estiver contido o "nolabel" ele não vai entrar nessa condição*/
        const label = document.createElement('label') /** todo "elemento" que tiver a classe tag será injetada essa label */
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName /** Colocar o nome da tag dentro do label criado acima */
        elemento.insertBefore(label, elemento.childNodes[0]) /** Vai inserir antes do primeiro elemento que estiver dentro de "elemento" */
    }
})