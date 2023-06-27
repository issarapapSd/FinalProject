import React, { useState } from 'react';

interface CardProps {
    initialMessage: string;
}

const Card: React.FC<CardProps> = ({ initialMessage }) => {
    const [message, setMessage] = useState(initialMessage);

    const handleButtonClick = () => {
        setMessage('New message');
    };

    return (
        <div className="card">
            <button onClick={handleButtonClick}>Press Me</button>
            <p>{message}</p>
        </div>
    );
};

export default Card;