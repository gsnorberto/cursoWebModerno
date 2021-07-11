<template>
    <div class="door-area">
        <div class="door-frame" :class="{selected: selected && !open}"> <!-- estrutura da porta (moldura). "selected: selected". Se selected for true, ele aplica a classe css "selected" -->
            <Gift v-if="open && hasGift"/>
        </div>
        <div class="door" :class="{ open }" @click="selected = !selected"> <!--se tiver false coloca true se tiver true coloca false-->
            <div class="number" :class="{selected}"> {{ number }} </div> <!--Aplica a classe selected se ela for "true" - selected: selected -->
            <div class="knob" :class="{selected}" @click="open = true"></div> <!--Maçaneta da porta . O "@click.stop" para a propagração do evento do click do pai para que quando o usuário clique para abrir a porta a porta não fique selecionada-->
        </div>
    </div>
</template>

<script>
    import Gift from './Gift'

    export default {
        name: 'Door',
        components: { Gift },
        props: {
            number: {},
            hasGift: {type: Boolean}
        },
        data: function(){ //para cada instância dessa função ele recebe os valores padrões iniciais 
            return{
                open: false, // porta fechada
                selected: false // porta não selecionada
            }
        }
    }
</script>

<style>
    :root{
        --door-border: 5px solid brown;
        --selected-border: 5px solid yellow;
    }
    .door-area{
        position: relative;
        width: 200px;
        height: 310px;
        border-bottom: 10px solid #AAA;
        margin-bottom: 20px;
        font-size: 3rem;

        /* Define a posição das bordas da porta (moldura)*/
        display: flex;
        justify-content: center;
    }
    .door-frame{
        position: absolute;
        height: 300px;
        width: 180px;

        border-left: var(--door-border);
        border-top: var(--door-border);
        border-right: var(--door-border);

        /* Define a posição do presente */
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .door{
        position: absolute;
        top: 5px;
        height: 295px;
        width: 170px;
        background-color: chocolate;

        /* Define a posição do número da porta */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .door .knob{
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background-color: brown;
        align-self: flex-start;
        margin-top: 60px;
    }

    /* Quando a porta for selecionada */
    .door-frame.selected{
        border-left: var(--selected-border);
        border-top: var(--selected-border);
        border-right: var(--selected-border);
    }
    .door .number.selected{
        color: yellow;
    }
    .door .knob.selected{
        background-color: yellow;
    }

    /* Quando abrir a porta */
    .door.open{
        background-color: #0007;
    }
    .door.open .knob{
        display: none;
    }
    .door.open .number{
        display: none;
    }
</style>