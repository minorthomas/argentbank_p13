import { useDispatch, useSelector } from 'react-redux';
import { Account } from '../../components/account/Account';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../../components/UserProfile';
import { handleUser } from '../../features/user/user';
import ACCOUNTS from '../../__mocks__/accounts.json';
import { handleToken, logout } from '../../features/auth/auth';
import { useFetch } from '../../hooks/useFetch';
import './profile.scss';

export function Profile() {
    const { fetchData, status, data, isLoading, error } = useFetch();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const user = state.user;
    const auth = state.auth;
    const navigate = useNavigate();

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
        },
    };

    useEffect(() => {
        fetchData(`${process.env.REACT_APP_API_URL}/profile`, config);

        if (status === 401) {
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
            navigate('/login');
        }

        if (!isLoading && !error && data.body) {
            dispatch(
                handleUser({
                    id: data.body.id,
                    firstName: data.body.firstName,
                    lastName: data.body.lastName,
                    email: data.body.email,
                })
            );
        }
    }, [isLoading, error]);

    return (
        <main className='profile'>
            <UserProfile
                firstName={user.firstName}
                lastName={user.lastName}
                token={auth.token}
            />

            {ACCOUNTS.map((element, index) => (
                <Account
                    key={index}
                    title={element.title}
                    amount={element.amount}
                    balanceType={element.balanceType}
                />
            ))}
        </main>
    );
}
