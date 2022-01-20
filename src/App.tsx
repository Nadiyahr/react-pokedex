/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { requestCard, requestPokemon, requestTypes } from './api/pocemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  // const [card, setCard] = useState<Card>([]);

  const loadData = async () => {
    const pokemonFromServer = await requestPokemon();
    const pokemonTypes = await requestTypes();

    const pokemonCards = (): Pokemon[] => {
      return pokemonFromServer?.results.map((item: Pokemon, index: number) => {
        const type: Type = { type: pokemonTypes?.results[index].name };

        const newItem = { ...item, ...type };

        return newItem;
      });
    };

    setPokemons(pokemonCards());

    console.log(pokemons);
  };

  const toggleOpen = async () => {
    setOpen(!isOpen);
    console.log(isOpen);

    const pokemonC = await requestCard(pokemons[0].url);
    const url = await requestCard(pokemonC.game_indices[0].version.url);

    console.log(url.id);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="starter">
      <h1>
        Pokedex
      </h1>
      <ul>
        {pokemons.map(pokemon => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            onClick={toggleOpen}
            onKeyPress={toggleOpen}
            key={pokemon.name}
          >
            {`${pokemon.name} - ${pokemon.type}`}
          </li>
        ))}
      </ul>
      {isOpen && (
        <div>

        </div>
      )}
    </div>
  );
};
