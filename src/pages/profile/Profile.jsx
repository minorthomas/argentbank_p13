import { useDispatch, useSelector } from 'react-redux';
import { Account } from '../../components/account/Account';
import './profile.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderProfile from '../../components/HeaderProfile';
import { handleUser } from '../../features/user/user';

const ACCOUNTS = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: '2,082.79',
        balanceType: 'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '10,928.42',
        balanceType: 'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '184.30',
        balanceType: 'Current Balance',
    },
];

export function Profile() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const user = state.user;
    const auth = state.auth;
    const navigate = useNavigate();

    useEffect(() => {
        async function userData() {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.token}`,
                },
            };

            await fetch(`${process.env.REACT_APP_API_URL}/profile`, config)
                .then((res) => res.json())
                .then((body) => {
                    if (body.body) {
                        dispatch(
                            handleUser({
                                id: body.body.id,
                                firstName: body.body.firstName,
                                lastName: body.body.lastName,
                                email: body.body.email,
                            })
                        );
                    } else {
                        navigate('/signin');
                    }
                })
                .catch((err) => console.log(err));
        }

        userData();
    }, [auth.token, dispatch, navigate]);

    return (
        <main className='profile'>
            <HeaderProfile
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
