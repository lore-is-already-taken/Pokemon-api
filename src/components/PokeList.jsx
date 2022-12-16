import React, { Children } from 'react';
import "../styles/PokeList.css"

function PokeList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { PokeList };
