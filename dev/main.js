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

  const pokemonWithPropertys = (element) => {
    const auxElement = element.name;
    return pokemonLastEvolution.includes(auxElement);
  };

  const pokemonLastEvolution = await getPokemonLastEvolution(); //solo retorna name
  const pokemonsWithoutEvolution = await getPokemonWithoutAnyEvolution();
  const allPokemones = await getAllPokemons(); // retorna el name, url
  const existPokemon = await allPokemones.filter(pokemonWithPropertys);

  // codigo de prueba

  const pokeMinWeight = await getMinWeightLastEvolution(existPokemon);

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
  const minPokemon = pokeMinWeight[0];
  divPokeMinWeight.classList.add("minPokeWeightDiv");
  divPokeMinWeight.innerHTML = `<img src=${minPokemon.sprites} alt=''/> <div class="minDescriptionTag"><p>Pokemon Name: ${minPokemon.name}</p> <p>Pokemon Weight: ${minPokemon.weight}</p></div>`;
  minPokeWeight.appendChild(divPokeMinWeight);

  pokemonLastEvolution.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `${element}`;
    secPokelist.appendChild(div);
  });
});
