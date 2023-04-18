import React from 'react';

export function HomeCard({ icon, title, content }) {
    return (
        <div className='home_card'>
            {icon}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
