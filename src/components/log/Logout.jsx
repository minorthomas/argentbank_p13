import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleToken, logout } from '../../features/auth/auth';
import { handleUser } from '../../features/user/user';

export function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();

        dispatch(logout());
        dispatch(handleToken(null));
        dispatch(
            handleUser({
                id: null,
                firstName: null,
                lastName: null,
                email: null,
            })
        );
        navigate('/');
    };

    return (
        <button onClick={handleLogout}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
            >
                <path d='M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z' />
            </svg>
            <p>Sign Out</p>
        </button>
    );
}
