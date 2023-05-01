import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch } from 'react-redux';
import { handleToken } from '../../states/userSlice';
import { getToken } from '../../services/api';
import { login } from '../../states/authSlice';

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        const token = await getToken({
            email: event.target[0].value,
            password: event.target[1].value,
        });

        if (token) {
            dispatch(handleToken(token));
            dispatch(login());
            navigate('/profile');
        }
    }

    return (
        <main className='connection'>
            <LoginForm handleLogin={handleLogin}></LoginForm>
        </main>
    );
}
