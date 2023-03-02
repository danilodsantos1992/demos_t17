let arr = [12, 13, 15, 17, 18, 19, 22];

let arr2 = [12, 'Thiago', [1,22], {nome: 'Thiago', sobrenome: 'Koman'}];

console.log(arr2);

//ARRAY ANINHADO (BIDIMENSIONAL)
let arrPai = [
                [1,2,3],
                [1,3,2],
                [1,3,1]
             ];

let arrFilho_1 = arrPai[0];
let arrFilho_2 = arrPai[1];

console.log(arrFilho_1[0]);
console.log(arrFilho_1[1]);
console.log(arrFilho_2[0]);
console.log(arrFilho_2[1]);

for(let i = 0; i<arrPai.length ; i++){
    let filho = arrPai[i];
    for(let j = 0; j < arrPai[i].length ; j++){
        console.log(arrPai[i][j]);
    }
}


let arrayNotas = [
    //[matematica, portugues, quimica, fisica, biologia]
    [100, 45, 56, 87, 100], //Aluno 1
    [89, 87, 87, 89, 100], //Aluno 2
    [65, 45, 43, 22, 19], //Aluno 3
    [56, 98, 40, 18, 70] //Aluno 4   
]

console.log(arrayNotas[0][4])


function listarNotas(arr){
    for(let i = 0; i < arr.length ; i++){
        let aluno = arr[i];
        console.log('ALUNO '+ (i+1));
        for(let j = 0 ; j < aluno.length ; j++){
            console.log(aluno[j]);
        }

    }
}
// listarNotas(arrayNotas)


function alunoAprovado(arr){
    //Somatória das notas
    //Contagem de notas
    //Calcular a média do aluno
    //Verificar a nota
        //Se for maior ou igual a 80, console.log('Aluno x aprovado')
        //Senão console.log('Aluno x reprovado');
        
    for(let i = 0 ; i < arr.length ; i++){
        let aluno = arr[i]; //[100, 45, 56, 87, 100]
        let soma = 0;
        let cont = 0;

        for(let j = 0 ; j < aluno.length ; j++){
            soma += aluno[j];
            cont++;
        }

        let media = soma / cont;

        // console.log('Média: '+media);

        if(media >= 80){
            console.log(`Aluno ${i+1} aprovado com ${media} de média`);
        }else{
            console.log(`Aluno ${i+1} reprovado com ${media} de média`);
        }
    }
}
alunoAprovado(arrayNotas);