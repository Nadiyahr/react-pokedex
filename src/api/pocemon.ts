import {
  BASE_URL, POKEMONS, TYPES,
} from './api';

export const requestPokemon = (offset: number) => {
  return fetch(`${BASE_URL}/${POKEMONS}/?limit=${offset}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const requestInfo = (name: string | number | null) => {
  // eslint-disable-next-line no-console
  console.log(name);

  return fetch(`${BASE_URL}/${POKEMONS}/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const requestTypes = () => {
  return fetch(`${BASE_URL}/${TYPES}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const requestTypeByIndex = (index: number | '') => {
  return fetch(`${BASE_URL}/${TYPES}/${index}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};
