//Referenciar os elementos html e seus tipos, usar a "!" para garantir a presença do elementos no html
let botaoAtualizar = document.getElementById('atualizar-saldo')! as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')! as HTMLSpanElement

//criar uma variavel numérica leitora do saldo
let saldo = 0

//atribuir o tipo do parametro da função
function somarAoSaldo( soma: number ) {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
}

function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    //transforma o texto em numero
    somarAoSaldo( Number(soma.value) );
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});