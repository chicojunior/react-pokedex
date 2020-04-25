import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import List from './components/List';
import useFetch from './hooks/useFetch';

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
