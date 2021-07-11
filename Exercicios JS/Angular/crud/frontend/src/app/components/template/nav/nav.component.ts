import { Component, OnInit } from '@angular/core';

//A classe "NavComponent" passa ser um componente no momento que se usa o decorator (@Component)
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
