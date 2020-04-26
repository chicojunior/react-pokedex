import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Card from './Card';

const List = (props) => {
  // const [pokemon, setPokemon] = useState({});
  // const [pokemonList, setPokemonList] = useState([]);
  // const [abilities, setAbilities] = useState([]);

  let pok = {};

  useEffect(() => {
    const fetchData = async () => {
      if (props.list.length) {
        props.list.forEach(async (item) => {
          const response = await axios.get(item.url);
          const data = response.data;
          console.log(data);
          if (data) {
            pok.id = data.id;
            pok.name = data.name;
            pok.image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
          }
        });

        console.log(pok);
      }

      // const response = await axios.get(props.pokemon.url);
      // setPokemon(response.data);
      // if (response.data) {
      //   response.data.abilities.forEach(async (item) => {
      //     const response = await axios.get(item.ability.url);
      //     setAbilities([...abilities, response.data]);
      //   });
      // }
    };
    fetchData();
  });

  return props.list.length ? (
    <div>
      {props.list.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  ) : null;
};

export default List;
