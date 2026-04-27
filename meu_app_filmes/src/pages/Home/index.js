import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
    const [filmes, setFilmes] = useState([]);
    
    useEffect(() => {
        async function loadfilmes(params) {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "b2de013b0dc09bf310dbc0f42353f745",
                    language: "pt-BR",
                    page: "1"
                }
            });        
            console.log(response);
            setFilmes(response.data.results.slice(0,10));            
        }        
        loadfilmes();
    },[]);
    return  (
        <div className="container">     
            <div className="lista-filmes">
            {
                filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )                    
                })
            }
            </div>       
        </div>
    );
}

export default Home;