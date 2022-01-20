/// <reference types="react-scripts" />

type Pokemon = {
  name: string,
  url: string
  type: Type | null,
};

type Type = {
  type: string,
};

interface Card {
  name: string;
  id: number;
  sprites: Sprites;
  types: Pokemon[];
  stats: Stats[];
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  }
}
