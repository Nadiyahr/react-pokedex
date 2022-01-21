/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { requestPokemon } from './api/pocemon';
import PokemonCard from './components/PokemonCard';
import FindPocemon from './components/FindPokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [isOpen, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const loadData = async () => {
    const pokemonFromServer = await requestPokemon();
    // const pokemonTypes = await requestTypes();

    setPokemons(pokemonFromServer.results);
    setCount(prev => prev + 1);
  };

  // const toggleOpen = async () => {
  //   setOpen(!isOpen);

  //   const pokemonC = await requestCard(pokemons[1].url);
  //   // const url = await requestCard(pokemonC.game_indices[0].version.url);

  //   console.log(pokemonC);
  // };

  useEffect(() => {
    loadData();
  }, []);

  // const pokemonReady = useMemo(() => {
  //   return pokemons;
  // }, [pokemons]);

  return (
    <div className="App">
      <div className="App_header">
        <h1 className="App_title">
          Pokedex
        </h1>
        <FindPocemon />
      </div>
      <div className="App_main">
        {count}
        <ul className="App_list">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
      <div className="App_sidebar">
        <h2>Sidebar</h2>
      </div>
    </div>
  );
};
