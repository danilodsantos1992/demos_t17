//FUNÇÕES
function nomeDaFuncao(){
    alert('Entrou na função');
} 
//nomeDaFuncao();


// let a = 2;
// let b = 3;

function soma(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

function subtrai(valor1, valor2){
    let resultado = valor1 - valor2;
    return resultado; 
}

// let resultadoSoma = soma(2,5);
// console.log(resultadoSoma);

// console.log(subtrai(5,3));


function calculadora(a, b, op){

    let resultado = 0;    
    //op = "+" -> soma() 
    //op = "-" -> subtrai()
 
    if(op == "+"){
        resultado = soma(a,b);
    }else if(op == "-"){
        resultado = subtrai(a,b);
    }else{
        alert(`A operação '${op}' não está disponivel`);
    }

    return resultado;
    
}

let input1 = parseInt(prompt('Digite o primeiro valor'));
let input2 = parseInt(prompt('Digite o segundo valor'));
let operat = prompt('Digite a operação');

let result = calculadora(input1,input2,operat)
console.log(result);
