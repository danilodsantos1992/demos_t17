// O QUE FOI VISTO NA ULTIMA DEMO?
//  - Laços de repetição
//  - while
//  - do while
//  - for
//  - Exemplos com laços de repetição

// O QUE SERÁ VISTO NA DEMO DE HOJE
//  - Utilização de funções por outras funções.
//  - Laço de repetição usado para percorrer os caracteres de uma string.
//  - For aninhado.

// CONTEÚDOS QUE SERÃO REFORÇADOS
//  - Funções
//  - Manipulaçao de String
//  - Condicionais
//  - Laços de repetição


//1-PALINDROME
//Entrada: String qualquer
//Saida: true ou false (true para palindromo).
function isPalindrome(str){
    let strInvert = '';

    //inverter a string para comparação
    for(let i = 0 ; i < str.length ; i++){ 
        strInvert = str[i] + strInvert;
    }

    //comparar a string com o seu inverso
    if(removeSpace(str) == removeSpace(strInvert)){
        return true;
    }
    return false;
}


//Entrada: string qualquer
//Saida: string sem os espaços em branco;
function removeSpace(str){
    let aux = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] != " "){
            aux += str[i];
        }
    }
    return aux.toLowerCase();
}
// console.log(removeSpace('hoje é dia de feira'));

console.log(isPalindrome('O romano acata amores a damas amadas e Roma ataca o namoro'));

//2.TABELA TABUADA
//Entrada: 4
//Saida:
/*
1  2   3  4
2  4   6  8
3  6   9 12
4  8  12 16

*/
function tabelaTabuada(n){
    //n vai definir a quantidade de linhas e colunas
    for(let i = 1 ; i <= n ; i++){
        let str = "";
        for(let j = 1; j <= n ; j++){
            // str += ` ${normalizaChar(i*j)} `;
            str += ` ${i}x${j} `;
        }
        console.log(str);
    }
}

// 1 | 1 -> 4
// 2 | 1 -> 4
// 3 | 1 -> 4
// 4 | 1 -> 4

//Entrada: char//numero
//Retorno: char com 3 char
function normalizaChar(n){
    let tamanho = n.toString().length;
    if(tamanho == 1){
        return ` ${n} `;
    }else if(tamanho == 2){
        return ` ${n}`; 
    }
    return n;
}
tabelaTabuada(4);