export function Account({ title, amount, balanceType }) {
    return (
        <section className='profile_account'>
            <div className='profile_account_infos'>
                <h3>{title}</h3>
                <p className='profile_account_infos_amount'>${amount}</p>
                <p className='profile_account_infos_description'>{balanceType}</p>
            </div>
            <button className='green_btn'>View transactions</button>
        </section>
    );
}
