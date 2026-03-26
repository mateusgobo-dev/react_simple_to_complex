import React, { Component } from 'react';

class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            status: false
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(name) {
        this.setState({ 
            nome: name,
            status: true
        });
    }
    sair() {
        this.setState({ 
            nome: "",
            status: false
        });
    }

    render() {
        return (
            <div>                
                <h2>Bem vindo</h2>
                    {
                        this.state.status ? 
                        <span><label>{this.state.nome}</label><br/ ><button onClick={() => this.sair()}>Sair</button></span>                        
                        :                                                
                        <span><button onClick={() => this.entrar("Mateus")}>Entrar</button></span>
                    }
                
            </div>            
        );
    }
}

export default Membro;