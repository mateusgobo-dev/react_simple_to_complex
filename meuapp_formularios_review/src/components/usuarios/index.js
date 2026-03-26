import React, { Component } from 'react';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: '',
            sexo: 'masculino',
            error: ''
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;        
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { nome, email, password, sexo } = this.state;
                
        if (!nome || !email || !password) {
            this.setState({ error: 'Nome, email e password são obrigatórios!' });
            return;
        }

        // Add Usuarios logic here
        console.log('Usuarios attempt:', { nome, email, password, sexo });
    }

    render() {
        const { email, password, sexo, error } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className='titulo'>Gestão de Usuários</h1>
                <label for="nome">Nome:</label><br />
                <input
                    type="text"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleInputChange}
                    placeholder="Nome"
                /><br />
                <label for="email">Email:</label><br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                /><br />
                <label for="password">Password:</label><br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                /><br />
                <label for="sexo">Sexo:</label><br />
                <select name="sexo" onChange={this.handleInputChange} value={sexo}>                    
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>                    
                </select>
                {error && <p>{error}</p>}<br /><br />
                <button type="submit">Usuarios</button>
            </form>
        );
    }
}

export default Usuarios;