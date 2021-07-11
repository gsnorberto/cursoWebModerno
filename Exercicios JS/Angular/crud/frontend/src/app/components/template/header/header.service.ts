import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // vai ter uma única instância desse service em toda a aplicação
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({ // "O BehaviorSubject" vai detectar sempre que tiver mudanças nos valores internos desse objeto
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })
  
  constructor() { }

  //Como o "headerData" é privado, para acessar e alterar seus valores fora do componente header há a necessidade de criar um get e um set
  get headerData(): HeaderData{
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
