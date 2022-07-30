//Várias possíveis respostas:

//Resposta 1:
let employee1: { code: number , name: string } = { // Indicar os tipos de dados dos atributos
    code: 10,
    name: 'John'
}

//Resposta 2:
let employee2 = { //Deixar o TypeScript inferir os tipos através das declarações
    code: 10,
    name: 'John'
}

//Resposta 3:
type employee3 = { //Criar como tipo e depois criar objeto
    code: number;
    name: string;
}
let empregadoA: employee3 = {code: 10, name: 'John'}

//Resposta 4:
interface employee4 { //Criar como interface e inicializar o objeto depois
    code: number;
    name: string;
}
let empregado1: employee4 = {code: 10,name: 'John'}

//Resposta 5:
let empregado2 = {} as employee4; //Referenciar o objeto com a interface já criada
    empregado2.code = 10;
    empregado2.name = 'John';