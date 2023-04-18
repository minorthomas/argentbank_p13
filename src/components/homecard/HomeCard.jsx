import './homecard.scss';

export function HomeCard({ icon, title, content }) {
    return (
        <section className='home_card'>
            {icon}
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    );
}
