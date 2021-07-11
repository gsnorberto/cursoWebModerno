import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

//Quando um service é injetado (@injectable) ou provido a partir do 'root' significa que a classe vai ter uma única instância (singleton). Isso significa que se você tiver um contador esse valor vai ser compartilhado por todos componentes que fizer chamada a esse service.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] //estilo do styles.css
    })
  }
  
  //--------------------------//------------------------
  //ESCRITA DE PRODUTOS NO BACKEND
  //Esse método vai receber um produto e retornar um "Observable". O Observable serve para que quando receber uma resposta do backend para a requisição post abaixo, chame a função que vai ser passada
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj), //recebe um objeto e simplesmente retorna esse objeto. Mas caso ocorra algum erro na chamada do post, ele vai cair no catch abaixo
      catchError ((e) => this.errorHandler(e))
    );
  }

  //--------------------------//------------------------
  //LEITURA DOS PRODUTOS NO BACKEND
  //Vai retornar um "Observable" com uma lista de produtos
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    );
  }

  //--------------------------//------------------------
  //EDITAR PRODUTOS
  //Utiliza o "readById" para trazer (do database) as informações do produto selecionado para edição. Essas informações são impressas nos campos para edição e depois de editada chama a o "update" para alterar esse produto no database
  readById(id: string | null): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    )
  }
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    )
  }

  //--------------------------//------------------------
  //EXCLUIR PRODUTO
  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    )
  }

  //--------------------------//------------------------
  //FUNÇÃO DE TRATAMENTO DE ERROS
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY //retorna um observable vazio
  }
}
