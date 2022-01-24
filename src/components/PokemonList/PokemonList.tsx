import React from 'react';
import PokemonCard from '../PokemonCard';
import './PokemonList.scss';

type Props = {
  onSelectName: (name: string | '') => void;
  pokemons: Pokemon[];
};

export const PokemonList: React.FC<Props> = (props) => {
  const { onSelectName, pokemons } = props;

  return (
    <ul className="App_list">
      {pokemons.map(pokemon => (
        <button
          className="btn"
          key={pokemon.name}
          type="button"
          onClick={() => onSelectName(pokemon.name)}
        >
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
          />
        </button>
      ))}
    </ul>
  );
};
