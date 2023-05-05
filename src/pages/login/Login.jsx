import { LoginForm } from '../../components/log/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, handleToken } from '../../features/auth/auth';
import { useFetch } from '../../hooks/useFetch';
import './login.scss';

export function Login() {
    const { fetchData, data, isLoading} = useFetch();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    async function handleLogin(event) {
        event.preventDefault();

        const userInfo = {
            email: event.target[0].value,
            password: event.target[1].value,
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        };

        fetchData(`${process.env.REACT_APP_API_URL}/login`, config);
    }

    useEffect(() => {
        if (!isLoading && data.body) {
            dispatch(handleToken(data.body.token));
            dispatch(login());
            navigate('/profile');
        }

        if (data && data.status === 400) {
            setError(data.message);
        }
        
    }, [isLoading, data])

    return (
        <main className='connection'>
            <LoginForm handleLogin={handleLogin} error={error != null ? error : ''} />
        </main>
    );
}
