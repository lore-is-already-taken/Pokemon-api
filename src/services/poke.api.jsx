import axios from 'axios';

const getAllPokemons = async (setPokemones) => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
    );
    setPokemones(response.data.results);
  } catch (error) {
    console.log('error');
  }
};

const getPokemon = async (url) => {
  try {
    const response = await axios.get(url);
    const pokemon = {
      name: response.data.name,
    };
    return pokemon;
  } catch (error) {
    console.log('hola mi rey, me he encontrado un error: ' + error);
  }
};

export { getAllPokemons, getPokemon };
