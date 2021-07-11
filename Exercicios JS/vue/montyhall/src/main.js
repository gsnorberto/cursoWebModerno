//O build da aplicação (WebBack) lê por padrão o arquivo main.js (não pode colocar outro nome a não ser esse)
//App.vue é o componente raiz da aplicação

import Vue from 'vue'
import App from './App'

new Vue({
    // el: '#app', //Substituido pelo "$mount" abaixo que faz a mesma função. Vai procurar a div com id=app dentro de index.html que se encontra na pasta "public". OBS: Tanto no index.html quanto no App.vue tem a div com id=app, mas não haverá duplicidade pois a div do index.html é sobreposta pela div do App.vue
    //render: h => h(App)
    render(createElement){
        return createElement(App) //Renderiza o componente raiz da aplicação (o App.vue) dentro da div que tem o id=app
    }
}).$mount("#app")