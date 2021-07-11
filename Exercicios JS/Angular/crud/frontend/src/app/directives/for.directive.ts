import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { //onInit = ciclo de vida de inicialização. Se fosse o OnChange sempre que houvesse uma mudança ele chamaria a diretiva

  //vai pegar o que vier depois da palavra chave "em" no for dentro do componente footer
  @Input('myForEm') numbers ?: number[]

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any> //pega o "li" do componente que declarou a diretiva estrutural "for"
  ) {}

  ngOnInit(): void{
    //Cria um template para cada repetição do laço for que está sendo usado no componente "home"
    for(let number of this.numbers!){
      this.container.createEmbeddedView(this.template, { $implicit: number}) //this.template será o "li" que é o que foi colocado dentro da diretiva. E dentro desse template será inserido um valor implícito que será o "number". Quem recebe esse valor implícito é o "n" no "for" declarado dentro do componente
    }
  }
}
