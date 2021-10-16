import React, { Component } from "react";
import CriarNota from "../CriarNota/CriarNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CriarNota />
        </li>
        <li>
          <CriarNota />
        </li>
        <li>
          <CriarNota />
        </li>
      </ul>
    );
  }
}
export default ListaDeNotas;
