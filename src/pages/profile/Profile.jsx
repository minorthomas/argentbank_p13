import { useDispatch, useSelector } from 'react-redux';
import { Account } from '../../components/account/Account';
import './profile.scss';
import { useEffect} from 'react';
import { handleUser } from '../../states/userSlice';
import { getUserInfos } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import HeaderProfile from '../../components/HeaderProfile';

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
    const navigate = useNavigate();

    useEffect(() => {
        async function userData() {
            const data = await getUserInfos(state.auth.token);

            if (data) {
                dispatch(
                    handleUser({
                        id: data.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                    })
                );
            } else {
                navigate('/signin');
            }
        }

        userData();
    }, [state.auth.token, dispatch, navigate]);

    return (
        <main className='profile'>
            <HeaderProfile firstName={state.user.firstName} lastName={state.user.lastName} token={state.auth.token}/>

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
