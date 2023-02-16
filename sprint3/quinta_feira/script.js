
let nome = 'Thiago';
let sobrenome = 'Koman';

let nomeCompleto = 'O nome do usuário é ' + nome + ' ' + sobrenome + '.'; //nome sobrenome

let nomeCompletoTemplateString = `O nome do usuário é ${nome} e seu sobrenome é ${sobrenome}.`;

console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);
console.log(nomeCompletoTemplateString);

console.log(nome.length); //6

console.log(nome[0]);
// 0 1 2 3 4 5 | 6 
// T h i a g o

//Ultimo indice
let quantidadeDeChar = nome.length; 
let ultimoIndice = quantidadeDeChar - 1 ; //5
console.log(ultimoIndice);

console.log(nome[ultimoIndice]);

let apelido = nome[0] + sobrenome[0];
console.log(apelido);


//Comparadores
/* 
 == Operador de igualdade 
 === Operador de igualdade e tipo 
 != Operador de diferença
 !== Operador de diferença e tipo
 < Menor
 > Maior
 <= Menor igual
 >= Maior igual
*/ 

//  CONDICIONAL (IF, ELSE,  ELSE IF)
//prompt('Escreva seu nome');



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

if(altura >= 1.70 || peso < 80){

}

