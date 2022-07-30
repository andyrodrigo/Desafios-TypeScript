var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    //transforma o texto em numero
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
