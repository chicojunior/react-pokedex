import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (props.pokemon) {
      const getPokemonData = async () => {
        let url = props.pokemon.url;
        const response = await axios.get(url);
        console.log(response);
        setPokemon(response.data);
      };

      getPokemonData();
    }
  }, []);

  console.log(pokemon);

  return pokemon ? (
    <div>
      <p>Name: {pokemon.name}</p>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={`${pokemon.name} image`}
      />
    </div>
  ) : null;
};

export default Card;
