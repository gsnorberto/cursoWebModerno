import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // proplegal = "qualquer" //usado no product-create.component.html
  product: Product ={
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService, private router: Router
  ) { }

  ngOnInit(): void { }

  //Função para criar produto. Chamado no evento de click do componente HTML
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto cadastrado com sucesso!')
      this.router.navigate(['/products']) //volta para página de CRUD de produtos
    }) //No método subscribe será notificado quando a resposta chegar
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
  // fazerAlgo(): void { //usado no product-create.component.html
  //   console.log('Fazendo algo');
    
  // }
}
