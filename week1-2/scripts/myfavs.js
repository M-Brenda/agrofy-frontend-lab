var guardado = localStorage.getItem('myFavs');
var section = document.getElementById('pokemons');
let pokemon = [];

let content = document.getElementsByClassName('divcontenedor');

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
            console.log(poke);
            pokemon.push(poke);
            mostrarPoke(poke);            
        })
  }

  
  function mostrarPoke(poke){

    var guard = JSON.parse(localStorage.getItem("myFavs")) || [];

    if (guard && guard.length) {
        guard.map(item => {
          if (item == poke.id) {
             let contenedor = document.createElement("div");
              contenedor.className="divcontenedor"
              let nombre = document.createElement("h3");
              nombre.className="nombre";
              nombre.innerText = poke.name[0].toUpperCase() +  poke.name.slice(1);
              let typepoke = document.createElement("p");
              typepoke.innerText = "Type: " + poke.types[0].type.name;
       
              if (poke.types[1]) {
                    typepoke.innerText= "Type: " + poke.types[0].type.name + ', ' + poke.types[1].type.name; 
                  }

              let divimg= document.createElement("div");
              img = document.createElement("img");
              img.src = poke.imagen;
              let addtofavs = document.createElement("button");
              addtofavs.id= "addtofavs";
              addtofavs.innerText = "Add to favs";
              //addtofavs.onclick= addfav;
              let remove = document.createElement("button");
              remove.id="remove";
              //remove.classList="esconder";
              remove.innerText= "Remove";
              remove.onclick= removefav;
      
              
              section.appendChild(contenedor);
              contenedor.appendChild(divimg);
              contenedor.appendChild(nombre);
              contenedor.appendChild(typepoke);
              divimg.appendChild(img);
              contenedor.appendChild(addtofavs);
              contenedor.appendChild(remove);
              verify();
    
              function removefav() {
                verify();
                const guard = JSON.parse(localStorage.getItem("myFavs")) || [];
                const filtered = guard.filter(item => item != poke.id)
                localStorage.setItem('myFavs', JSON.stringify(filtered));
                contenedor.style.display = "none";
                console.log(guard);
              }
              function verify() {
                const guard = JSON.parse(localStorage.getItem("myFavs")) || [];
                console.log(guard);

                if (guard && guard.length) {
                  guard.map(item => {
                    for (let i = 0; i < guard.length; i++) {
                        if (item == poke.id) {
                          addtofavs.style.display = "none";
                          remove.style.display = "block";
                        }
                    }
                  })
                } else {
                    contenedor.style.display = "none";
                }
              }
          }
        })

    }
  }
