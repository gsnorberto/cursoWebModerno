import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  //products: Product[] = [];
  //ou
  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  //Método que é chamado assim que o componente é inicializado. Inicialização da tabela
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products //recebe os produtos do banco de dados (products) atribuindo ao modelo de produto especificado (this.products)
      // console.log(products)
    })
  }
}
