import React, { useEffect, useState } from 'react';
import './App.scss';
import { requestInfo, requestPokemon, requestTypeByIndex } from './api/pocemon';
import FindPocemon from './components/FindPokemon';
import { POKEMONS_PER_PAGE } from './api/consts';
import PokemonDetails from './components/PkemonDetails';
import PokemonList from './components/PokemonList';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonAreLoaded, setPokemonAreLoaded] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(POKEMONS_PER_PAGE);
  const [details, setDetails] = useState<Card | null>(null);
  const [typeIndex, setTypeIndex] = useState<number | 0>(0);
  const [typeName, setTypeName] = useState<string | ''>('');
  const [indexLoaded, setIndexLoaded] = useState<boolean>(false);
  const [typeOffset, setTypeOffset] = useState<number>(POKEMONS_PER_PAGE);

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

  const loadTypeWithIndex = async (index: number) => {
    const listByIndexType = await requestTypeByIndex(index + 1);

    setPokemons(listByIndexType.pokemon
      .slice(0, typeOffset)
      .map((x: TypePokemon) => x.pokemon));
  };

  const getIndexType = (index: number, name: string) => {
    if (index) {
      setPokemonAreLoaded(false);
    } else {
      setPokemonAreLoaded(true);
    }

    setIndexLoaded(!indexLoaded);
    setTypeIndex(index);
    setTypeName(name);
  };

  const loadMore = () => {
    if (indexLoaded) {
      setTypeOffset(prevOffset => prevOffset + 12);
    }

    if (pokemonAreLoaded) {
      setOffset(prevOffset => prevOffset + 12);
    }
  };

  useEffect(() => {
    if (pokemonAreLoaded) {
      loadData();
    }

    if (typeIndex) {
      loadTypeWithIndex(typeIndex);
    }
  }, [offset, pokemonAreLoaded, typeOffset, typeIndex]);

  return (
    <div className="App">
      <div className="App_header">
        <h1 className="App_title">
          <span className="App_span">
            {pokemonAreLoaded ? 'all ' : `${typeName} `}
          </span>
          Pokedex
        </h1>
        <FindPocemon
          getIndex={getIndexType}
        />
      </div>
      <div className="App_main">
        <PokemonList onSelectName={getPokemon} pokemons={pokemons} />
        <button
          type="button"
          className="App_more"
          onClick={loadMore}
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
