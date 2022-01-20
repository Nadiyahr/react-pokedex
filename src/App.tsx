/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { requestPokemon } from './api/pocemon';
import PokemonList from './components/pokemonList';
import FindPocemon from './components/FindPokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [isOpen, setOpen] = useState<boolean>(false);
  // const [card, setCard] = useState<Card>([]);

  const loadData = async () => {
    const pokemonFromServer = await requestPokemon();
    // const pokemonTypes = await requestTypes();

    setPokemons(pokemonFromServer.results);
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

  const pokemonReady = useMemo(() => {
    return pokemons;
  }, [pokemons]);

  return (
    <div className="App">
      <div className="App_header">
        <h1 className="App_title">
          Pokedex
        </h1>
        <FindPocemon />
      </div>
      <div className="App_main">
        <ul className="App_list">
          {pokemons.map(pokemon => (
            <PokemonList key={pokemon.name} pokemons={pokemonReady} />
          ))}
        </ul>
      </div>
      <div className="App_sidebar">
        <h2>Sidebar</h2>
      </div>
    </div>
  );
};
