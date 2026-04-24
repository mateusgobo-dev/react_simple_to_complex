import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>                                     
        </div>
    );
}