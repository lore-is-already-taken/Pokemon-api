import axios from "axios";

const MAIN_URL = "https://pokeapi.co/api/v2/";
const ENDPOINT_POKEMON = MAIN_URL + "pokemon?limit=1160&offset=0";
const ENDPOINT_EVOLUTIONTRIGGER = MAIN_URL + "evolution-trigger/";
const ENDPOINT_EVOLUTIONCHAIN =
  MAIN_URL + "evolution-chain?limit=1500&offset=0/";

const getAllPokemons = async () => {
  try {
    const response = await axios.get(ENDPOINT_POKEMON);
    return response.data.results;
  } catch (error) {
    console.log("error");
  }
};

const getPokemonLastEvolution = async () => {
  let pokemonLastEvolution = [];

  const response = await axios.get(ENDPOINT_EVOLUTIONCHAIN);
  const { data, status } = response;
  let pokemonName = "";

  if (status === 200) {
    data.results.forEach(async ({ url }) => {
      const r = await axios.get(url);
      const hasEvolution = r.data.chain.evolves_to;

      if (hasEvolution == 0) {
        pokemonLastEvolution.push(r.data.chain.species.name);
      } else {
        pokemonName = await checkEvolveTo(r.data.chain, "");
      }

      pokemonLastEvolution.push(pokemonName);
    });
  }
  return pokemonLastEvolution;
};

async function checkEvolveTo(chain, miau) {
  if (chain.evolves_to.length == 0) {
    return miau;
  }
}

const getPokemonsWithoutEvolutionChain = async () => {
  let pokemonWithoutEvolution = [];

  const response = await axios.get(ENDPOINT_EVOLUTIONCHAIN);

  const { data, status } = response;
  const { results } = data;

  if (status === 200) {
    results?.forEach(async (element) => {
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
  getPokemonsWithoutEvolutionChain,
  getPokemonLastEvolution,
};
