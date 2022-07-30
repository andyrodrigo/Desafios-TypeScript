let clique = document.getElementById("clique");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let resultado = document.getElementById("resultado");


function adicionarNumero( numero1: number , numero2: number){
    return numero1 + numero2;
}

if( clique ){
    clique.addEventListener( 'click' , () =>{
        if( input1 && input2){
            if(resultado){
                resultado.innerText = String(adicionarNumero( Number(input1.value) , Number(input2.value) ) );
            }   
        }
    } )
}
