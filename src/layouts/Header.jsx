import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Logout } from '../components/log/Logout';
import { useSelector } from 'react-redux';

export function Header() {
    const state = useSelector((state) => state);
    const user = state.user;
    const auth = state.auth;

    return (
        <header className='header'>
            <nav className='header_navigation'>
                <Link to='/'>
                    <Logo />
                </Link>
                <ul>
                    {auth.isAuth ? (
                        <>
                            <li>
                                <Link to='/profile'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z' />
                                    </svg>
                                    <p>{user.firstName}</p>
                                </Link>
                            </li>
                            <li>
                                <Logout/>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to='/login'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z' />
                                </svg>
                                <p>Sign In</p>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
