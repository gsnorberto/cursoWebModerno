import { Directive, ElementRef } from '@angular/core';

// Diretiva para mudar cor do elemento para vermelho.
@Directive({ //É importado dentro do módulo "app.module" e usado no footer
  selector: '[appRed]'
})
export class RedDirective {

  // usando o princípio de injeção de dependência
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}
