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

    if (guardado.includes(poke.id)) {
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

    verify();
    section.appendChild(contenedor);
    contenedor.appendChild(divimg);
    contenedor.appendChild(nombre);
    contenedor.appendChild(typepoke);
    divimg.appendChild(img);
    contenedor.appendChild(addtofavs);
    contenedor.appendChild(remove);



    
    function removefav(){
      var guard = localStorage.getItem("myFavs");
      guard.splice(guard.indexOf(poke.id), 1 );
      localStorage.setItem('myFavs', JSON.stringify(guard));
      verify ();

    }

    function verify (){
      var guard = localStorage.getItem("myFavs");
      if (guard!=null) {
      if (guard.includes(poke.id)) {
        addtofavs.style.display="none";
        remove.style.display="block";
        //sectionfav.appendChild(contenedor);
        
      } else {
        addtofavs.style.display="block";
        remove.style.display="none";
        //sectionfav.removeChild(sectionfav.contenedor);
      }
    }else{
      remove.style.display="none";
    }

  }

  }}


/*
  var guardado = localStorage.getItem('myFavs');
  console.log('objetoObtenido: ', JSON.parse(guardado));

  function pokeGuardados(guardado, poke) {
    var fav = document.getElementsByClassName("divcontenedor");
      if (guardado.includes(poke.id)) {
        fav.style.display="flex";
      } else {
        fav.style.display="none";
        }
  }*/
