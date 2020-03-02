var section = document.getElementById('pokemons');
let favs = [];
let pokemon = [];
for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const poke = {
                name: data.name,
                id: data.id,
                imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
                types: data.types,
              }
            console.log(poke)
            pokemon.push(poke)
            mostrarPoke(data, i)
        })
  }

  
  function mostrarPoke(data, i){
    let contenedor = document.createElement("div");
    contenedor.className="divcontenedor"
    let nombre = document.createElement("h3");
    nombre.innerText = data.name[0].toUpperCase() +  data.name.slice(1);
    let type = document.createElement("p");
    type.innerText= [data.types];
    let divimg= document.createElement("div");
    img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    let addtofavs = document.createElement("button");
    addtofavs.id= "addtofavs";
    addtofavs.innerText = "Add to favs";
    addtofavs.onclick= addfav;
    let remove = document.createElement("button");
    remove.id="remove";
    remove.classList="esconder";
    remove.innerText= "Remove";
    remove.onclick= removefav;

    section.appendChild(contenedor);
    contenedor.appendChild(divimg);
    contenedor.appendChild(nombre);
    contenedor.appendChild(type);
    divimg.appendChild(img);
    contenedor.appendChild(addtofavs);
    contenedor.appendChild(remove);

    function addfav(){
      addtofavs.classList.toggle("esconder");
      remove.classList.toggle("esconder");
  
    }
    
    function removefav(){
      addtofavs.classList.toggle("esconder");
      remove.classList.toggle("esconder");
    }

  }
  

