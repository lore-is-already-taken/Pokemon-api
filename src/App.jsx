import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllPokemons,
  getPokemonsWithoutEvolutionChain,
  getPokemonLastEvolution,
} from "./services/poke.api";
import { PokeList } from "./components/PokeList";
import { PokeListItem } from "./components/PokelistItem";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonWithEvolution, setpokemonWithEvolution] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const auxPokemonWithEvolution = await getPokemonLastEvolution();
      const auxPokemons = await getAllPokemons();

      setPokemons(auxPokemons);
      setpokemonWithEvolution(auxPokemonWithEvolution);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>hola</h1>
      {pokemonWithEvolution.length}
      <br />
      {pokemons.length}
      <div>
        <PokeList>
          {pokemonWithEvolution.map((poke, index) => {
            return <PokeListItem key={index} url="" name={poke} />;
          })}
        </PokeList>
      </div>
    </div>
  );
}

export default App;
