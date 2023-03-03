let funcionarios = ['Pedro', 'Eduardo', 'Gabriel', 'Roberto', 'Ronaldo', 'João'];

//Crie uma função que recebe dois parametros, o array de funcionários e uma string. Seu objetivo é retornar a posição da palavra dentro do array. Se a palavra não estiver presente dentro do array, retorne -1.
function indexOfString(array, str){
    for(let i = 0 ; i<array.length ; i++){
        if(array[i] == str){
            return i;
        }
    }
    return -1;
}
// console.log(indexOfString(funcionarios, 'Helio'));

//Crie uma função que recebe dois parametros, o array de funcionários e uma string. Seu objetivo é retornar true se a string estiver presente dentro do array ou false caso não.


function includeString(array, str){
    for(let i = 0; i<array.length ; i++){
        if(array[i] == str){
            return true;
        }
    }
    return false;
}
// console.log(includeString(funcionarios, 'Gabriel'))


let numeros = [1,22,343,54,53,23,54,456,77,8,99,3,1,2];
//Desenvolva uma função que recebe o array de numeros por parametro e retorna um novo array somente com os numeros pares.
function filterPar(arr){
    let arrRetorno = [];
    for(let i = 0; i<arr.length ; i++){
        if(arr[i] % 2 == 0){
            arrRetorno.push(arr[i]);
        }
    }
    return arrRetorno;
}
// console.log(filterPar(numeros));

//Desenvolva uma função que recebe o array de numeros por parametro e retorna o somatório de todos os numeros presentes dentro do array.
function somaValores(arr){
    let soma = 0;
    for(let i = 0 ; i<arr.length ; i++){
        soma += arr[i];
        // soma = soma + arr[i];
    }
    return soma;
}
// console.log(somaValores([1998, 2000, 2002]));


//Desenvolva uma função que recebe uma matriz por parametro e retorna a posição do maior valor numérico presente dentro da matriz. No seguinte formato: [2,4]
let matriz = [
    [1, 15, 12, 10, 20, 17, 19, 20],//8
    [2, 4, 6, 8, 10, 12], //6
    [13, 22, 24, 26, 25, 13, 15],//7
    [39, 42, 47, 12], //4
    [12, 11, 22, 44, 52], //5
    [13, 12, 11, 10, 9, 8, 7, 6] //8
]//52 - [4,4]

function maxValueOfMatriz(arr){
    let maxValue = 0;
    let positionMaxValue = [];//[[0,0],[0,1]]
    for(let i = 0; i<arr.length ; i++){
        let arrFilho = arr[i];
        for(let j = 0 ; j<arrFilho.length ; j++){
            if(arrFilho[j] > maxValue){
                maxValue = arrFilho[j];
                // positionMaxValue = []
                // positionMaxValue.push(i);
                // positionMaxValue.push(j); 
                positionMaxValue = [i,j];
            }
        }
    }
    return positionMaxValue;
}
console.log(maxValueOfMatriz(matriz));

