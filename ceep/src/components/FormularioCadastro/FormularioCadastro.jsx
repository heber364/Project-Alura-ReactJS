import React, { Component } from "react";
import "./style.css"
class FormularioCadastro extends Component{
  
  constructor(props){
    super(props);
    this.titulo ="";
    this.texto="";
    this.categoria="";
  }

  _handlerMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handlerMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }
    
  render(){
    return(
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select 
          className="form-cadastro_input" 
          onChange={this._handlerMudancaCategoria.bind(this)}
        >
          <option>Nenhum</option>
          {this.props.categorias.map((categoria)=>{
            return <option>{categoria}</option>
          })}
        </select>
        <input 
          type="text" 
          placeholder="Título" 
          className ="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea 
          rows={15}
          placeholder="Escreva sua nota..." 
          className ="form-cadastro_input"
          onChange ={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );

  }
}
export default FormularioCadastro;