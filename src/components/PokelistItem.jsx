import React from 'react';
import '../styles/PokeListItem.css';

function PokeListItem(props) {
  return (
    <li>
      <p>{props.text}</p>
    </li>
  );
}
export { PokeListItem };
