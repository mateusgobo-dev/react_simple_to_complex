import {Link} from 'react-router-dom';
import './index.css';

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Prime flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes Favoritos</Link>
        </header>
    );
}   
export default Header;