import React, {Component} from "react";

class Equipe extends Component{
  render(){
    return (
      <div>
        <h2>Olá, sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h4>Idade: {this.props.idade}</h4>

        <hr />
      </div>
    )
  }
}


function App() {
  return (
    <div>
        <Equipe nome="Teteus" cargo="Burro de carga" idade="42"/>      
        <Equipe nome="Pablo Vitar" cargo="Mulher mais sexy do Brasil?" idade="24"/>      
        <Equipe nome="Taís Carla" cargo="Peso pesado" idade="28"/>      
    </div>
  );
}

export default App;
