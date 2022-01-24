/// <reference types="react-scripts" />

interface Colors {
  [name: string]: string
}

type Pokemon = {
  name: string,
  url: string
};

type TypePokemon = {
  pokemon: Pokemon;
  slot: number;
};

interface PokemonType {
  name: string;
  url: string;
}

interface Sprites {
  other: {
    'official-artwork': {
      front_default: string;
    }
  }
}

interface PokemonTypes {
  type: {
    name: string;
  }
}

interface Card {
  moves: [];
  name: string;
  id: number;
  sprites: Sprites;
  types: PokemonTypes[];
  stats: Stats[];
  weight: number;
  moves: [];
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  }
}

interface ReactSelect<T> {
  value: T;
  label: string;
}
