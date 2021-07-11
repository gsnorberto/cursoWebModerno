//Da mesma forma que no react o build procura o index.js, no Vue procura o main.js

import Vue from 'vue'
import App from './App'

new Vue({
    // el: '#app',
    // render(createElement){
    //     return createElement(App)
    // }
    render: h => h(App) // faz o mesmo que o "render" acima. Cria o elemento.
}).$mount("#app") // substitui o "el: '#app'". Joga o elemento acima dentro da div que está o index.html(na pasta public)