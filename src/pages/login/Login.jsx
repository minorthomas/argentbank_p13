import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch } from 'react-redux';
import { login, handleToken } from '../../states/authSlice';
import { useState } from 'react';

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    async function handleLogin(event) {
        event.preventDefault();

        const userInfo = {
            email: event.target[0].value,
            password: event.target[1].value,
        };

        await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((body) => {
                if (body.body) {
                    dispatch(handleToken(body.body.token));
                    dispatch(login());
                    navigate('/profile');
                }
                if (body.status === 400) {
                    setError(body.message);
                }
                return body;
            })
            .catch((err) => console.log(err));
    }

    return (
        <main className='connection'>
            <LoginForm handleLogin={handleLogin} error={error != null ? error : ''} />
        </main>
    );
}
