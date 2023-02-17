//Comparadores
/* 
 == Operador de igualdade 
 === Operador de igualdade e tipo 
 != Operador  de diferença
 !== Operador de diferença e tipo
 < Menor
 > Maior
 <= Menor igual
 >= Maior igual
*/ 

//  CONDICIONAL (IF, ELSE,  ELSE IF)
//prompt('Escreva seu nome');

// let, var, const

let usuario = prompt('Usuário');

if(usuario == 'ThiagoKenzie'){
    let senha = prompt('Senha'); 
    if(senha == '1234'){
        console.log('Usuário validado');
    }else{
        console.log('Senha Inválida');
    }
}else{
    console.log('Usuário não cadastrado');
}


//altura minima de 1.70 e pesar menos de 80kg
if(altura >= 1.70){
    if(peso < 80){
        //código
    }
}

//altura minima de 1.70 ou pesar menos de 80kg
if(altura >= 1.70){
    //codigo
}else if(peso < 80){
    //código
}

//////////////////////////////////////////////// Demo da sexta-feira

// Escopo de variavel
let teste = "global";

if(true){
    let teste = "local";
    console.log(teste);
}

console.log(teste);


//Operadores lógicos
let resultado = false;

//altura minima de 1.70 e pesar menos de 80kg
if(altura >= 1.70){
    if(peso < 80){
        resultado = true;
    }
}

if(altura >= 1.70 && peso < 80){
    resultado = true;
}

/*
Tabela verdade do AND(&&)
    false && false = false
    true && false = false
    false && true = false
    true && true = true 
*/



//altura minima de 1.70 ou pesar menos de 80kg
if(altura >= 1.70){
    resultado = true;
}else if(peso < 80){
    resultado = true;
}

if(altura >= 1.70 || peso < 80){
    resultado = true;
}

/*
Tabela verdade do OR(||)
    false || false = false
    true || false = true
    false || true = true
    true || true = true 
*/


//NOT (!)

let usuario2 = prompt('Usuário');
//Gabriel
//false || false = false
// !false = true

//Thiago
//true || false == true
// !true = false

if( !(usuario2 == 'Thiago' || usuario2 == 'Eduardo') ){
    console.log('Usuário aceito');
}

//AND(&&)
//OR(||)
//NOT(!)


//TESTE DE MESA
let n1 = 2;
let n2 = 3;

n1 = n1+5;
n2 = n1+n2;
n2 = n2*3;
n2 = n2-1;
n1 = n1/2;
n2 = n2+5;

if(n2 > 12){
    n2 = n2 / 2;
}

if(n1 != parseInt(n1)){
    n1 = parseInt(n1);
}

n1 = n1+n2;
n2 = n1;

console.log(n1, n2)


