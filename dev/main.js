import "./style.css";
import {
  getPokemonLastEvolution,
  getAllPokemons,
  getMinWeightLastEvolution,
  getPokemonWithoutAnyEvolution,
} from "./apiHandles";
window.addEventListener("DOMContentLoaded", async () => {
  const secPokelist = document.querySelector(".pokeList");
  const pokemonCounts = document.querySelector(".pokemonCounts");
  const minPokeWeight = document.querySelector(".minPokeWeight");

  const pokemonLastEvolution = await getPokemonLastEvolution(); //solo retorna name
  const pokemonsWithoutEvolution = await getPokemonWithoutAnyEvolution();
  const allPokemones = await getAllPokemons(); // retorna el name, url

  const pokemonWithPropertys = (element) => {
    const auxElement = element.name;
    return pokemonLastEvolution.includes(auxElement);
  };

  // codigo de prueba
  const existPokemon = allPokemones.filter(pokemonWithPropertys);

  const pokeMinWeight = await getMinWeightLastEvolution(existPokemon);
  console.log(pokeMinWeight);

  pokemonLastEvolution.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `${element}`;
    secPokelist.appendChild(div);
  });

  const h3TotalPokemones = document.createElement("h3");
  const h3PokemonLastEvolution = document.createElement("h3");
  const h3PokemonWithoutEvolution = document.createElement("h3");

  h3TotalPokemones.innerHTML = `Total Pokemones:  ${allPokemones.length}`;
  h3PokemonLastEvolution.innerHTML = `sin evolucion (contando la ultima evolucion): ${pokemonLastEvolution.length}`;
  h3PokemonWithoutEvolution.innerHTML = `Pokemones sin ningun tipo de evolucion: ${pokemonsWithoutEvolution.length}`;

  pokemonCounts.appendChild(h3TotalPokemones);
  pokemonCounts.appendChild(h3PokemonLastEvolution);
  pokemonCounts.appendChild(h3PokemonWithoutEvolution);

  const divPokeMinWeight = document.createElement("div");
  //divPokeMinWeight.innerHTML = `<img src=${pokeMinWeight.sprites}/> <p>${pokeMinWeight.name}</p>`;

  minPokeWeight.appendChild(divPokeMinWeight);
});
//crea un elemento con clase .card con el nombre del pokemon

//muestra el pokemon mas liviano
const pokemonMasLiviano = document.createElement("p");
