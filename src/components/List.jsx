import React from 'react';

import Card from './Card';

const List = (props) => {
  return props.list.length ? (
    <div>
      {props.list.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  ) : null;
};

export default List;
