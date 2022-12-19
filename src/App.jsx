import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllPokemons,
  getPokemonsWithoutEvolutionChain,
  getPokemonLastEvolution,
  getMinWeightLastEvolution,
} from "./services/poke.api";
import { PokeList } from "./components/PokeList";
import { PokeListItem } from "./components/PokelistItem";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonWithoutEvolution, setpokemonWithoutEvolution] = useState([]);
  const [pokemonsLastEvolution, setPokemonsLastEvolution] = useState([]);
  const [pokemonPropertys, setPokemonsPropertys] = useState([]);
  const [minPokemonWeight, setMinPokemonWeight] = useState(500);
  const [minPokeWeightName, setMinPokeWeightName] = useState("");

  const setNameAndWeight = () => {
    pokemonPropertys.map((poke) => {
      console.log(poke);
    });
    console.log("nombre:" + { minPokeWeightName });
    console.log("peso:" + { minPokemonWeight });
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const auxPokemonsLastEvolution = await getPokemonLastEvolution();
      const auxPokemonWithoutEvolution =
        await getPokemonsWithoutEvolutionChain();
      const auxPokemons = await getAllPokemons();
      const auxPokemonsPropertys = await getMinWeightLastEvolution();

      setPokemons(auxPokemons);
      setpokemonWithoutEvolution(auxPokemonWithoutEvolution);
      setPokemonsLastEvolution(auxPokemonsLastEvolution);
      setPokemonsPropertys(auxPokemonsPropertys);
    };
    fetchPokemons();
    setNameAndWeight();
  });

  return (
    <div className="App">
      <h1>hola</h1>
      <div className="resumenPokemons">
        <h3>Pokemones sin evolucion: {pokemonsLastEvolution.length}</h3>
        <h3>Total de pokemones: {pokemons.length}</h3>
      </div>

      <div className="pokemonList">
        <PokeList>
          <p>pokemon sin evolucion</p>
          {pokemonWithoutEvolution.map((poke, index) => {
            return <PokeListItem key={index} url="" name={poke} />;
          })}
          {}
        </PokeList>

        <PokeList>
          <p>pokemon last evolucion</p>
          {pokemonsLastEvolution.map((poke) => {
            return <PokeListItem key={poke} name={poke}></PokeListItem>;
          })}
        </PokeList>
      </div>
    </div>
  );
}

export default App;
