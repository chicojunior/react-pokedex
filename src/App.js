import React from 'react';

import './App.css';

import useFetch from './hooks/useFetch';

import List from './components/List';

function App() {
  const data = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonList = data.response;

  return pokemonList ? (
    <div>
      <List list={pokemonList.results} />
    </div>
  ) : null;
}

export default App;
