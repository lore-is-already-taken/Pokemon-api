import axios from 'axios';

const MAIN_URL = 'https://pokeapi.co/api/v2/';
const ENDPOINT_POKEMON = MAIN_URL + 'pokemon?limit=1160&offset=0';
const ENDPOINT_EVOLUTIONTRIGGER = MAIN_URL + 'evolution-trigger/';
const ENDPOINT_EVOLUTIONCHAIN =
  MAIN_URL + 'evolution-chain?limit=1500&offset=0/';

const getAllPokemons = async () => {
  const response = await axios.get(ENDPOINT_POKEMON);
  const { data, status } = response;
  if (status === 200) {
    return data.results;
  }
};

const getPokemonLastEvolution = async () => {
  const response = await axios.get(MAIN_URL + 'evolution-chain/3/');
  const { data } = response;
  checkEvolveTo(data.chain);

  // let pokemonLastEvolution = [];

  // const response = await axios.get(ENDPOINT_EVOLUTIONCHAIN);
  // const { data, status } = response;
  // if (status === 200) {
  //   data.results.forEach(async ({ url }) => {
  //     const r = await axios.get(url);
  //     const { data } = r;
  //     const firstChain = data.chain;
  //     pokemonLastEvolution.push(checkEvolveTo(firstChain, ''));
  //   });
  // }
  // return pokemonLastEvolution;
};

async function checkEvolveTo(chain) {
  if (chain.hasOwnProperty('evolves_to') && chain.evolves_to.length == 0) {
    console.log(chain.species);
  } else if (chain.hasOwnProperty('evolves_to')) {
    const newChain = chain.evolves_to[0];
    checkEvolveTo(newChain);
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
