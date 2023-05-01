import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch } from 'react-redux';
// import { handleToken } from '../../states/userSlice';
import { getToken } from '../../services/api';
import { login, handleToken } from '../../states/authSlice';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fetchData, data, isLoading } = useFetch();

    async function handleLogin(event) {
        event.preventDefault();


        const userInfo = {
            email: event.target[0].value,
            password: event.target[1].value,
        };

        await fetchData('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        // const token = await getToken({
        //     email: event.target[0].value,
        //     password: event.target[1].value,
        // });

        if (isLoading) {
            return;
        }

        if (data.body) {
            dispatch(handleToken(data.body.token));
            dispatch(login());
            navigate('/profile');
        }
    }

    return (
        <main className='connection'>
            <LoginForm
                handleLogin={handleLogin}
                error={data ? (data.status === 400 ? data.message : '') : ''}
            ></LoginForm>
        </main>
    );
}
