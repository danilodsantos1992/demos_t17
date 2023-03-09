// Encontrando a tag article manualmente no DOM
// window.document.body.childNodes[1].childNodes

// Encontrando a tag article com seletores
// document.querySelector("article");

document.title = "Golimar";

// Seletores únicos

const item = document.querySelector("li");
// console.log(item);

const redes = document.querySelector("#redes");
// console.log(redes);

const objetivos = document.getElementById("objetivos");
// console.log(objetivos);

const titleN1 = document.querySelector(".name");
// console.log(titleN1);

// Seletores múltiplos

const sections = document.getElementsByTagName("section");
// console.log(sections);

const itens = document.getElementsByClassName("item");
// console.log(itens);

const queryItens = document.querySelectorAll(".item");
// console.log(queryItens);

const querySections = document.querySelectorAll("section");
// console.log(querySections);

const queryRedes = document.querySelectorAll("#redes");
// console.log(queryRedes);

// Alterar propriedades
const anchor = document.querySelector("a");
anchor.target = "blank";
anchor.innerText = "Insta";

// Criação de elementos
const newSection = document.createElement("section");
// newSection.innerText = "Seção de experiências";

const titleSection = document.createElement("h2");
titleSection.innerText = "Experiências";
newSection.appendChild(titleSection);

const article = document.querySelector("article");
article.appendChild(newSection);
