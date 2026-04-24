import React from 'react';
import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco</p>
            <Link to="/">Home</Link>                    
            <Link to="/Sobre">Sobre</Link>            
        </div>
    );
}