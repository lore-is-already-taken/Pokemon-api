import React from "react";
import "../styles/PokeListItem.css";

function PokeListItem(props) {
  return (
    <li>
      <p>{props.url}</p>
      <p>{props.name}</p>
    </li>
  );
}
export { PokeListItem };
