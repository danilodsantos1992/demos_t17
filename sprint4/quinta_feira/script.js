let variavelTeste = "Teste";

function format2Decimals(n){
    n = n+"";
    let result = "";

    if(n.length < 2){
        result = "0" + n;
    }else{
        result = n;
    }

    return result;
}

//  DD/MM/AAAA hh:mm
let dia = prompt('Digite o dia');
let mes = prompt('Digite o mes');
let ano = prompt('Digite o ano');
let hora = prompt('Digite a hora');
let minutos = prompt('Digite os minutos');

dia = format2Decimals(dia);
mes = format2Decimals(mes);
hora = format2Decimals(hora);
minutos = format2Decimals(minutos);

let dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;

console.log(dataFormatada);


//ESCOPO
//Escopo de bloco


{
   var nome = "Thiago";
   console.log('Dentro do escopo: ' + nome); 
    {
        console.log('Dentro do escopo filho: ' + nome)
    }
}
console.log('Fora do escopo: ' + nome);


//Escopo de função

function teste(){
    let sobrenome = "Koman";
    if(true){
        console.log("Dentro do if: " + sobrenome);
    }   

    console.log("Dentro da função: " + sobrenome);
}
teste();
console.log("Fora da função: " + sobrenome);


function parOuImpar(n){
    if(n % 2 == 0){
        return "O numero pode ser divido por 2";
    }else{
        return "O numero não pode ser divido por 2";
    }
}


function divisivel(n, div){
    if(n % div == 0){
        return `O numero ${n} é divisivel por ${div}`;
    }else{
        return `O numero ${n} não é divisivel por ${div}`;
    }
}
