import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Mateus', curtidas: 10, comentarios: 5, compartilhamentos: 2},
                {id: 2, username: 'Lucas', curtidas: 20, comentarios: 10, compartilhamentos: 5},
                {id: 3, username: 'Amanda', curtidas: 30, comentarios: 15, compartilhamentos: 10},
                {id: 4, username: 'Cleosmildo', curtidas: 1, comentarios: 20, compartilhamentos: 15}
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Feed de Notícias</h1>                
                {this.state.feed.map(post => (
                    <div key={post.id}>
                        <h2>{post.username}</h2>
                        <a href='#'>Curtida{post.curtidas > 1 ? 's' : ''}: {post.curtidas}</a> / <a href='#'>Comentários: {post.comentarios}</a>                        
                        <p>Compartilhamentos: {post.compartilhamentos}</p>
                        <hr />
                    </div>
                ))}                
            </div>
        );
    }
}

export default Feed;