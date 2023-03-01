let num = 0;
let str = '';

//          0  1  2  3  4
let arr1 = [1, 2, 3, 4, 5];

//           0    1    2    3
let arr2 = ['A', 'B', 'C', 'D'];

//          0   1    2     3        4
let arr3 = [1, 'B' , 2, 'Thiago', 3.14];

//           0    1    2    3    4
let arr4 = [456, 789, 987, 654, 423]

let ultimoIndiceArr4 = arr4.length - 1;

// console.log(arr4[ultimoIndiceArr4]);


//Adicionar
let array = [];
// console.log(array);

array.push('Thiago');
array.push('Koman');
array.push(25);
// console.log(array);

let array2 = [];
array2.unshift('Thiago'); //['Thiago']
array2.unshift('Koman');  //['Koman','Thiago']
array2.unshift(25);       //[25, 'Koman','Thiago']
console.log(array2);

console.log(array2[0])
console.log(array2[2])
let valor = prompt('Digite uma informação!');
let arr = [valor];
while(valor != 'sair'){
    valor = prompt('Digite uma informação!');
    arr.push(valor);
}
console.log(arr);

let tamanho = arr.length;
let ultimoIndice = tamanho - 1;

console.log(arr[ultimoIndice]);

//EXEMPLO        0          1        2
let lista = ['Thiago', 'Eduardo', 'Lorena']; //3

function verificaValor(arr, str){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == str ){ //Lorena == Lorena
            return true;
        }
    }
    return false;
}

console.log(verificaValor(lista, 'Teste'));
console.log(verificaValor(lista, 'Lorena'));
console.log(verificaValor(lista, 'Thiago'));


let funcionarios = ['Thiago', 'Eduardo', 'Lorena'];
let clientes = ['Francisco', 'Ricardo', 'Eduardo'];

let isFuncionario = verificaValor(funcionarios, 'Eduardo');
let isCliente = verificaValor(clientes, 'Eduardo');

if(isFuncionario && isCliente){
    // ...
}