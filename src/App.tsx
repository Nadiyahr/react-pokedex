/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { requestPokemon } from './api/pocemon';
import PokemonList from './components/pokemonList';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [isOpen, setOpen] = useState<boolean>(false);
  // const [card, setCard] = useState<Card>([]);

  const loadData = async () => {
    const pokemonFromServer = await requestPokemon();
    // const pokemonTypes = await requestTypes();

    setPokemons(pokemonFromServer.results);

    console.log(pokemons);
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

  const prepPok = useMemo(() => {
    return pokemons;
  }, [pokemons]);

  return (
    <div className="App">
      <h1>
        Pokedex
      </h1>
      .
      <ul className="App_list">
        {pokemons.map(pokemon => (
          <PokemonList key={pokemon.name} pokemons={prepPok} />
        ))}
      </ul>
    </div>
  );
};
