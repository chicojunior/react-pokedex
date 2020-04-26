import React from 'react';

import useFetch from '../hooks/useFetch';

const Card = (props) => {
  const data = useFetch(props.pokemon.url);
  const pokemon = data.response;

  return pokemon ? (
    <div>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={`${pokemon.name} image`}
      />
      <p>Name: {pokemon.name}</p>
    </div>
  ) : null;
};

export default Card;
