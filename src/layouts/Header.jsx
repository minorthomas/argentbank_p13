import Logo from '../assets/img/argentBankLogo.png';

export function Header() {
    return (
        <header className='header'>
            <nav className='header_navigation'>
                <a href='/'>
                    <img src={Logo} alt='Logo argent bank de couleur verte' />
                </a>
                <ul>
                    <li>
                        <a href='/'>O Tony</a>
                    </li>
                    <li>
                        <a href='/'>&gt; Sign Out</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
