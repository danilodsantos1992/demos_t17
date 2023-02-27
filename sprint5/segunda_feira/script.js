// let valor = 5;

// if(valor>2){ //se
//     console.log('Entrou no if');
// }

// while(/* condição de execução */){ //enquanto
//     //código que será executado enquanto a condição for verdadeira
// }


//WHILE
let i = 0;
while(i<10){ //10
    console.log(i);
    i++
}
console.log('Finalizou o while');

//DO WHILE
let j = 10;
do{
    j--; // j = j - 1;
    console.log(j)
}while(j>11);

//FOR
//i++ -> i = i+1 -> i+=1
//i-- -> i = i-1
//i+= 10 -> i = i + 10

for( let i = 1 ; i<=10 ; i++ ){
    let result = 2 * i;
    console.log(`2 x ${i} = ${result}`);
}

function tabuada(n){
    for( let i = 1 ; i<=10 ; i++ ){
        let result = n * i;
        console.log(`${n} x ${i} = ${result}`);
    } 
}

tabuada(9);



