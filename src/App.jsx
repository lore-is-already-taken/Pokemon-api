import { useEffect, useState } from 'react';
import './App.css';
import {
  getAllPokemons,
  getPokemonsWithoutEvolutionChain,
  getPokemonLastEvolution,
} from './services/poke.api';
import { PokeList } from './components/PokeList';
import { PokeListItem } from './components/PokelistItem';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonWithoutEvolution, setpokemonWithoutEvolution] = useState([]);
  const [pokemonsLastEvolution, setPokemonsLastEvolution] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const auxPokemonWithoutEvolution =
        await getPokemonsWithoutEvolutionChain();
      const auxPokemons = await getAllPokemons();
      const auxPokemonsLastEvolution = await getPokemonLastEvolution();

      setPokemons(auxPokemons);
      setpokemonWithoutEvolution(auxPokemonWithoutEvolution);
      setPokemonsLastEvolution(auxPokemonsLastEvolution);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>hola</h1>
      <div className="resumenPokemons">
        <h3>Pokemones sin evolucion: {pokemonWithoutEvolution.length}</h3>
        <h3>Total de pokemones: {pokemons.length}</h3>
      </div>
      <div className="pokemonList">
        <PokeList>
          {pokemonWithoutEvolution.map((poke, index) => {
            return <PokeListItem key={index} url="" name={poke} />;
          })}
        </PokeList>
      </div>
    </div>
  );
}

export default App;
