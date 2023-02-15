 // operadores aritimeticos  +  -  /  *  %  **

 let soma =  2 + 2    // 4
 //console.log(soma)

 let sub = 10 - soma  // 6
 //console.log(sub)

 let div = sub / 2   //  3
 //console.log(div)


 let mult = div * 3    // 9
 //console.log(mult)

 let resto = mult%2   // 1
 //console.log(resto)

 let exp =  5**3   //  125
 //console.log(exp)
 

//=============================================

// operadores atribuição  =  +=  -=  *=  /=

let precoDaBanana = 2   // atribuição simples

//precoDaBanana = precoDaBanana + 2
precoDaBanana += 10   //14

//precoDaBanana = precoDaBanana - 5
precoDaBanana -= 5


//precoDaBanana = precoDaBanana * 3
precoDaBanana *= 3


//precoDaBanana = precoDaBanana / 3
precoDaBanana /= 3


//==================================================


// ***  Strings   toUpperCase() e toLowerCase()

let nomeA = "luiz"

nomeA = nomeA.toUpperCase()

let nomeB = "PAULO"

nomeB = nomeB.toLowerCase()


// Concatenação de strings


let nomeCompleto = nomeA + " " + nomeB

//console.log(nomeCompleto)


//============================================


//template strings

let nomeC = "reis"
let nomeD = "cardoso"

// let sobreNome = nomeC + " " + nomeD
let sobreNome = `${nomeC} ${nomeD}`
let nomeSobrenome = `${nomeCompleto} ${sobreNome}`


let vendas = 5
let total = "10,00"
let vendedor = "João"

let frase = `O vendedor ${vendedor} realizou ${vendas} vendas, com um total de R$${total}`

//console.log(frase)


//==============================================


// conversão string para number com parseInt() e parseFloat()

let numStrInt = "12"
let numStrFloat = "15.5"

let convertA = parseInt(numStrInt)
let convertB = parseFloat(numStrFloat)

console.log(`o tipo do valor numStrInt é ${typeof numStrInt} e foi convertido para ${typeof convertA}`)

let numeroA = "10"
let numeroB = "20"

console.log(parseInt(numeroA) + parseInt(numeroB))

let unMedida = "10.5km"

console.log("a distância é" , parseFloat(unMedida))












