var section = document.getElementById('pokemons');
let favs = [];
let pokemon = [];
let myFavs = [];
function traerpoke(){
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
            mostrarPoke(poke)
        })
  }
}
traerpoke();

  
  function mostrarPoke(poke){
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
    addtofavs.onclick= addfav;
    let remove = document.createElement("button");
    remove.id="remove";
    remove.classList="esconder";
    remove.innerText= "Remove";
    remove.onclick= removefav;

    section.appendChild(contenedor);
    contenedor.appendChild(divimg);
    contenedor.appendChild(nombre);
    contenedor.appendChild(typepoke);
    divimg.appendChild(img);
    contenedor.appendChild(addtofavs);
    contenedor.appendChild(remove);


    function addfav(){
      myFavs.push(poke.id);
      console.log(myFavs)
      localStorage.setItem('myFavs', JSON.stringify(myFavs));
      verify (myFavs);
  
    }
    
    function removefav(){
      myFavs.splice( myFavs.indexOf(poke.id), 1 );
      localStorage.setItem('myFavs', JSON.stringify(myFavs));
      verify (myFavs);
    }


    function verify (myFavs){
    if (myFavs.includes(poke.id)) {
      console.log(myFavs)
      addtofavs.style.display="none";
      remove.style.display="block";
      
    } else {
      addtofavs.style.display="block";
      remove.style.display="none";
    }
    }



  }


  /*var guardado = localStorage.getItem('datos');

  console.log('objetoObtenido: ', JSON.parse(guardado));*/

let btnsearch = document.getElementById("btnsearch");
btnsearch.addEventListener ("click", 
function search_poke() {
  let input = document.getElementById('mySearch').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('nombre');
  let content = document.getElementsByClassName('divcontenedor');

  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().startsWith(input, 0)) { 
          content[i].style.display="none"; 
      } 
      else { 
          content[i].style.display="flex";
      } 
  } 

  if (input.length==0) {
    for (i = 0; i < x.length; i++) {  
          content[i].style.display="flex"; 
      } 
  }

} 
)

let input = document.getElementById('mySearch').value;
input=input.toLowerCase(); 
let x = document.getElementsByClassName('nombre');
let content = document.getElementsByClassName('divcontenedor');

if (input.length==0) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

var search = document.getElementById("mySearch");

search.addEventListener ("input", function() {
  if (input.length===0) {
    for (i = 0; i < x.length; i++) {  
      content[i].style.display="flex"; 
    } 
  }
})