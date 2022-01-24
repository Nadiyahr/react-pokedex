/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { requestInfo, requestPokemon, requestTypes } from './api/pocemon';
import FindPocemon from './components/FindPokemon';
import { POKEMONS_PER_PAGE } from './api/api';
import PokemonDetails from './components/PkemonDetails';
import PokemonList from './components/PokemonList';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(POKEMONS_PER_PAGE);
  const [details, setDetails] = useState<Card | null>(null);
  const [types, setTypes] = useState<PokemonType[]>([]);

  const loadData = async () => {
    const listFromServer = await requestPokemon(offset);

    setPokemons(listFromServer.results);
  };

  const loadCard = async (name: string) => {
    const info = await requestInfo(name);

    setDetails(info);
  };

  const getPokemon = (name: string) => {
    loadCard(name);
  };

  const loadTypes = async () => {
    const listOfTypes = await requestTypes();

    setTypes(listOfTypes.results);

    console.log(listOfTypes.results);
    console.log(types);
  };

  const getTypes = () => {
    loadTypes();
  };

  useEffect(() => {
    loadData();
  }, [offset]);

  return (
    <div className="App">
      <div className="App_header">
        <h1 className="App_title">
          Pokedex
        </h1>
        <FindPocemon getAllTypes={getTypes} allTypes={types} />
      </div>
      <div className="App_main">
        <PokemonList onSelectName={getPokemon} pokemons={pokemons} />
        <button
          type="button"
          className="App_more"
          onClick={() => setOffset(prevOffset => prevOffset + 12)}
        >
          Load More
        </button>
      </div>
      <div className="App_sidebar">
        {details && (
          <PokemonDetails
            setClose={setDetails}
            details={details}
          />
        )}
      </div>
    </div>
  );
};
