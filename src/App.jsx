import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { getAllPokemons, getPokemon } from './services/poke.api';
import { PokeList } from './components/PokeList';
import { PokeListItem } from './components/PokelistItem';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getAllPokemons(setPokemones);
  });

  return (
    <div className="App">
      <h1>hola</h1>
      <div>
        <PokeList>
          {pokemones.map((poke) => {
            return <PokeListItem key={poke.url} text={poke.name} />;
          })}
        </PokeList>
      </div>
    </div>
  );
}

export default App;
