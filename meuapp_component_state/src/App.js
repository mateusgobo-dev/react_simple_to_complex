import React, { Component } from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome : "Mateus",
      contador: 0,
      hora: "00:00:00"
    }
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador+=1;
    state.nome="José";
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    if(state.contador > 0){
      state.contador-=1;
      state.nome="Chico";
    }
    this.setState(state);
  }

  componentWillUnmount(){    
    console.log("Montando componente...");
    this.setState({hora: new Date().toLocaleTimeString()})    
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString()})
    },1000);
  }

  componentDidUpdate(){
    console.log("atualizou...");
  }

  
  render() {
    return (
      <div>
          <h1>{this.state.nome}, {this.state.hora}</h1>
          <button onClick={this.aumentar}>+</button>
          <label>{this.state.contador}</label>
          <button onClick={this.diminuir}>-</button>
      </div>
    );
  }
}

export default App;
