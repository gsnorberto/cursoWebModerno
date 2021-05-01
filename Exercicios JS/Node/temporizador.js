/** Disparar processos temporizados. Agendador de tarefas que através de uma expressão  vai definir a lógica de como ele vai repetir determinada tarefa. Então você pode, por exemplo, rodar um processo no seu sistema de forma agendada*/

/** Instalado um dos pacotes do Node que dá a possibilidade de fazer esse tipo de agendamento de tarefas. Através do seguinte comando no diretório "EXERCICIOS JS": npm i node-schedule@1.3.0 -E*/

/** Vale ressaltar que o próprio JS tem temporizadores como o setTimeOut e o setInterval. Porém com o temporizador do próprio Node você tem uma forma muito mais rica de disparar de forma temporizada algum tipo de ação */

const schedule = require('node-schedule') // Encontra-se dentro de node_modules

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 5', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) /**Executar de 5 em 5 segundos, em qualquer minuto, às 10 horas,  em qualquer dia do mês, em qualquer mês, na sexta feira (5)  OBS: 0 é domingo  - OBS: Se tirar o "* /" presente antes do 5, ele iria acionar apenas no segundo cinco de qualquer minuto das 12 horas da terça feira */

setTimeout(function(){ /** Cancelamento da tarefa acima depois do tempo especificado no final da função*/
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) /** Vai executar essa tarefa depois de 20 segundos */

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] /** Vai executar de segunda à sexta */
regra.hour = 10 /** Executar às 12 horas */
regra.second = 30 /** Executar a regra no segundo 30 */

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})