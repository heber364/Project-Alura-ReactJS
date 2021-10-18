import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <>
        <FormularioCadastro />
        <ListaDeNotas />
      </>
    );
  }
}

export default App;
