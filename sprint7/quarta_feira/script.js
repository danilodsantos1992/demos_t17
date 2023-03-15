/* <li id="p_1">
    <img src="./img/supra.jpg">
    <p>Toyota Supra 1998</p>
    <button id="car_1" class="productButton">Favoritar</button>
</li> */

// {
//     id: 1,
//     modelo: 'Supra',
//     ano: 1998,
//     marca: 'Toyota',
//     imagem: './img/supra.jpg',
// }
let favCount = 0;

function renderProductCards(list){
    let listaProdutos = document.querySelector('#listaProdutos');
    for(let i = 0 ; i<list.length ; i++){
        let carro = list[i]; //Abstração para carro
    
        //Criando os elementos
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let btn = document.createElement('button');
    
        //Configurando os elementos
        li.id = `p_${carro.id}`;
        img.src = carro.imagem;
        p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`;
        btn.innerHTML = 'Favoritar';
        btn.id = `car_${carro.id}`;
        btn.classList.add('productButton');

        btn.addEventListener('click', function(e){
            let idElemento = e.target.id;
            let id = parseInt(idElemento.substring(4));

            if(!verificaFavorito(id)){ 
                favCount++;
                document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;
            
                let carro = procuraCarro(id); 
    
                let elementoCarro = createFavoriteCard(carro);
    
                document.querySelector('#listaFavoritos').appendChild(elementoCarro);
                // console.log(elementoCarro);
            }
           
                       
        });
    
        //Hierarquia para os elementos
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(btn);
    
        //Inserindo os elementos na página
        listaProdutos.appendChild(li);
    }
}

function procuraCarro(id){
    for(let i = 0; i<carros.length ; i++){
        if(carros[i].id == id ){
            return carros[i];
        }
    }
}

/* <li id="l_1">
    <img src="./img/supra.jpg">
    <p>Toyota Supra 1998</p>
    <button id="fav_1" class="productButton">Remover</button>
</li> */
function createFavoriteCard(carro){
    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    li.id = `l_${carro.id}`;
    img.src = carro.imagem;
    p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`;
    btn.innerHTML = 'Remover';
    btn.id = `fav_${carro.id}`;
    btn.classList.add('productButton');

    btn.addEventListener('click' , function(event){
    
        favCount--;
        document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;

        // li.remove();

        // let listPath = event.composedPath();
        // listPath[1].remove();

        let idElemento = event.target.id;
        let id = parseInt(idElemento.substring(4));

        let pai = document.querySelector(`#l_${id}`);
        pai.remove();
    })

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(btn);

    return li;
}

function verificaFavorito(id){
    let elemento = document.querySelector('#l_'+id);
    if(elemento == null){
        return false;
    }else{
        return true;
    }
}

renderProductCards(carros);