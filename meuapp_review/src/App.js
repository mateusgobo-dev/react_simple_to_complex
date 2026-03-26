import React, {Component} from "react"

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}  />
      <Social fb={props.facebook}  google={props.google} linkedin={props.linkedin} /> 
      <hr />
    </div>    
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h1>Nome: {props.nome}</h1>
      <h2>Cargo: {props.cargo}</h2>
      <h3>Idade: {props.idade}</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>facebook</a>|
      <a href={props.google}>google</a>|
      <a href={props.linkedin}>linkedin</a>|
    </div>
  )
}

function App() {
  return (
    <div>
      <Equipe nome="Mateus" idade="42" cargo="Burro de Carga" facebook="https://www.facebook.com.br" google="https://www.google.com.br" linkedin="https://www.linkedin.com.br"/>
      <Equipe nome="Jojo Todinho" idade="?" cargo="Ex-obesa" facebook="https://www.facebook.com.br" google="https://www.google.com.br" linkedin="https://www.linkedin.com.br"/>
      <Equipe nome="Andressa Urach" idade="?" cargo="Vai lá saber?" facebook="https://www.facebook.com.br" google="https://www.google.com.br" linkedin="https://www.linkedin.com.br"/>
    </div>
  )
}

export default App;