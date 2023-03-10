import axios from "axios";

const MAIN_URL = "https://pokeapi.co/api/v2/";
const ENDPOINT_POKEMON = MAIN_URL + "pokemon?limit=1160&offset=0";
const ENDPOINT_EVOLUTIONCHAIN =
  MAIN_URL + "evolution-chain?limit=1500&offset=0/";
const ENDPOINT_POKEMON_SEARCH = MAIN_URL + "pokemon/";

let POKENAME = "";
let pokemonLastEvolution = [];

const getAllPokemons = async () => {
  const response = await axios.get(ENDPOINT_POKEMON);
  const { data, status } = response;
  if (status === 200) {
    return data.results;
  }
};

const getPokemonLastEvolution = async () => {
  const response = await axios.get(ENDPOINT_EVOLUTIONCHAIN);
  const { data, status } = response;

  if (status === 200) {
    data.results.forEach(async ({ url }) => {
      const r = await axios.get(url);
      const { data } = r;
      const firstChain = data.chain;
      await checkEvolveTo(firstChain);
      pokemonLastEvolution.push(POKENAME);
    });
  }

  return pokemonLastEvolution;
};

async function checkEvolveTo(chain) {
  if (chain.hasOwnProperty("evolves_to") && chain.evolves_to.length == 0) {
    POKENAME = chain.species.name;
  } else if (chain.hasOwnProperty("evolves_to")) {
    const newChain = chain.evolves_to[0];

    await checkEvolveTo(newChain);
  }
}

const crearPokemon = (data) => {
  return {
    id: data.id,
    name: data.name,
    weight: data.weight,
    sprites: data.sprites.front_default,
  };
};

const getMinWeightLastEvolution = async (pokemon) => {
  let peso = 10;
  let pokeList = [];

  const pokemonForeach = async (element) => {
    const response = await axios.get(ENDPOINT_POKEMON_SEARCH + element.name);
    const { data, status } = response;

    console.log("cargando...");
    if (status === 200 && data.weight < peso) {
      peso = data.weight;
      return crearPokemon(data);
    }
  };

  for (let i in pokemon) {
    const poke = await pokemonForeach(pokemon[i]);
    if (poke) {
      pokeList.unshift(poke);
    }
  }
  //await pokemon.forEach(pokemonForeach);

  return pokeList;
};

const getPokemonWithoutAnyEvolution = async () => {
  let pokemonWithoutEvolution = [];

  const response = await axios.get(ENDPOINT_EVOLUTIONCHAIN);

  const { data, status } = response;
  const { results } = data;

  if (status === 200) {
    results.forEach(async (element) => {
      const r = await axios.get(element.url);
      const hasEvolution = r.data.chain.evolves_to;
      if (hasEvolution == 0) {
        pokemonWithoutEvolution.push(r.data.chain.species.name);
      }
    });
  }

  return pokemonWithoutEvolution;
};

export {
  //getPokemonsWithEvolution,
  getAllPokemons,
  getPokemonWithoutAnyEvolution,
  getPokemonLastEvolution,
  getMinWeightLastEvolution,
};
