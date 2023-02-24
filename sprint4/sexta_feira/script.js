//no-else-return

//9 -> "09"
//10 -> "10"

//Recebe um numero por parametro e caso seja comporto por menos de 2 algarismos, insiro um 0 a esquerda

function format2Decimals(n){
    n = n+"";

    if(n.length < 2){
        return "0" + n;
    }

    return n;
}

//  DD/MM/AAAA hh:mm
const formatIndividualDataComponent = format2Decimals;

let dia = prompt('Digite o dia');
let mes = prompt('Digite o mes');
let ano = prompt('Digite o ano');
let hora = prompt('Digite a hora');
let minutos = prompt('Digite os minutos');

dia = formatIndividualDataComponent(dia);
mes = formatIndividualDataComponent(mes);
hora = formatIndividualDataComponent(hora);
minutos = formatIndividualDataComponent(minutos);

let dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;

console.log(dataFormatada);


function vaca(){
    console.log('muuuuuu');
}
const mimosa = vaca;
mimosa();


//METODO

//Métodos de string

//replace
let texto1 = "Kenzie Academy Brasil";
let subs = "Italia";
console.log(texto1.replace('Brasil', 'Italia'));

//replaceAll
let texto2 = 'banana, morango, limão, farinha, sal, morango';
console.log(texto2.replaceAll('morango', 'açucar'));

//startsWith
console.log(texto2.startsWith('banana'));

//includes
console.log(texto2.includes('morango'));


//toFixed
let valor1 = 3.141517
let result = valor1.toFixed(12);
console.log(result);

//isInteger
let valor2 = 15;
console.log(Number.isInteger(valor2))

//parseInt
console.log(parseInt(valor1))
console.log(parseInt('4.1517'))

//parseFloat
console.log(parseFloat('4.1517'))
