/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { requestPokemon } from './api/pocemon';
import PokemonCard from './components/PokemonCard';
import FindPocemon from './components/FindPokemon';
import { POKEMONS_PER_PAGE } from './api/api';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [isOpen, setOpen] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(POKEMONS_PER_PAGE);
  const [more, setMore] = useState<number>(0);

  const loadData = async () => {
    setOffset(prevOffset => prevOffset + 12);
    const pokemonFromServer = await requestPokemon(offset);

    setPokemons(pokemonFromServer.results);
  };

  const getMore = () => {
    setMore(current => current + 1);
    console.log(more);
  };

  // const toggleOpen = async () => {
  //   setOpen(!isOpen);

  //   const pokemonC = await requestCard(pokemons[1].url);
  //   // const url = await requestCard(pokemonC.game_indices[0].version.url);

  //   console.log(pokemonC);
  // };

  useEffect(() => {
    loadData();
  }, [more]);

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
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
        <button type="button" className="App_more" onClick={getMore}>Load More</button>
      </div>
      <div className="App_sidebar">
        <h2>Sidebar</h2>
      </div>
    </div>
  );
};
