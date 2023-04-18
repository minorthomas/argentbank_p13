import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Header() {
    return (
        <header className='header'>
            <nav className='header_navigation'>
                <Link to='/'>
                    <Logo />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>O Tony</Link>
                    </li>
                    <li>
                        <Link to='/'>&gt; Sign Out</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
