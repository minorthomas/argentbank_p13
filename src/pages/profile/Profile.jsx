import { Account } from '../../components/account/Account';
import './profile.scss';

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
    return (
        <main className='profile'>
            <div className='profile_header'>
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <button className='green_btn'>Edit name</button>
            </div>

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
