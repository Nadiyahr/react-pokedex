import React from 'react';
import PokemonCard from '../PokemonCard';
import './PokemonList.scss';

type Props = {
  pokemons: Pokemon[];
};

export const PokemonList: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};
