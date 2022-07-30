//Criando uma interface para adicioná-las
interface Pessoa {
    nome: string;
    idade: number;
    profissao: emprego;
}
//Criando um enumerador de empregos possíveis
enum emprego {
    atriz,
    padeiro
}

//Depois referencia-las na 1 e 2:
let pessoa1 ={} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = emprego.atriz

let pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = emprego.padeiro;

//Atribuir a interface na 3 e 4:
//na 3, retirar as aspas do numero que indicariam uma string
let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: emprego.atriz
};

//trocas "=" por ":"
let pessoa4: Pessoa = {
    nome : "carlos",
    idade: 19,
    profissao: emprego.padeiro
}