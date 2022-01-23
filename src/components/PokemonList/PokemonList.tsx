/* eslint-disable no-console */
import React from 'react';
import PokemonCard from '../PokemonCard';
import './PokemonList.scss';

type Props = {
  onSelectName: (name: string | '') => void;
  pokemons: Pokemon[];
};

export const PokemonList: React.FC<Props> = (props) => {
  const { onSelectName, pokemons } = props;
  // const [name, setName] = useState<string | ''>('');

  // useEffect(() => {
  //   console.log(name);
  //   onSelectName(name);
  // }, [name]);

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
