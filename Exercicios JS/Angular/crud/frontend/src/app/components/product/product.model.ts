//Aqui é definido o modelo do produto informando os atributos que o banco de dados espera receber. 

export interface Product{ //"interface" é um tipo de recurso que só está disponível no TS
    id?: number //a interrogação significa que o id não necessariamente precisa ser definido. Quando se cria um produto, por exemplo, o id é definido pelo próprio backend, não sendo necessário o usuário informar
    name: string,
    price: number | null  //pipe
}