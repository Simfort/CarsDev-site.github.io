import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/pngwing.com (4).png';

export default function Header(){
    return <header className='header'>
        <img src={logo} width='200' height='200'  className="logo"/>
        <nav className='header-nav'>
            <Link className='header-nav__item link-home' to='/'>Home</Link>
            <Link className='header-nav__item link-shop' to='/shop'>Shop</Link>
        </nav>
    </header>
}