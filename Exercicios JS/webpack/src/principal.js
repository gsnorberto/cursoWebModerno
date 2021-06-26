
import Pessoa from './pessoa'
import './modulos/moduloA' //"ModuloA" importa do "ModuloB" e "Principal" importa do "moduloA"
import './assets' //Procura o index.js dentro da pasta "assets"

const atendente = new Pessoa
console.log(atendente.cumprimentar())