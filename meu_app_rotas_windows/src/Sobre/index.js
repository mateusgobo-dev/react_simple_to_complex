import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <p>Esta é a página Sobre.</p>

            <Link to="/">Home</Link>
            <Link to="/Contato">Contato</Link>
        </div>
    );
}