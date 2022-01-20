import {
  BASE_URL, POKEMONS, TYPES,
} from './api';

export const requestPokemon = () => {
  return fetch(`${BASE_URL}/${POKEMONS}/`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const requestInfo = (name: string) => {
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

export const requestCard = (url: string) => {
  return fetch(`${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};
