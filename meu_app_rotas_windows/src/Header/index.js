import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../Sobre';
import Contato from '../Contato';
import Home from '../Home';

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Sistema React Crazy</h1>
                <nav className="nav">   
                    <BrowserRouter>     
                        <Routes>                                           
                            <Route path="/" element={<Home />} />|
                            <Route path="/Sobre" element={<Sobre />} />|
                            <Route path="/Contato" element={<Contato />} />
                        </Routes>
                    </BrowserRouter>                    
                </nav>
            </div>
        </header>
    );
}