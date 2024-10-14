import React from 'react';
import Card from './Card';
import styles from './Cards.module.scss';

const Cards: React.FC = () => {
    const cardData = [
        {
            title: 'Kuzey Tuncer',
            initialDescription: 'Web Developer',
            contactInfo: 'example.com',
        },
        {
            title: 'Kuzey Tuncer',
            initialDescription: 'Graphic Designer',
            contactInfo: 'example.com',
        },
        {
            title: 'Kuzey Tuncer',
            initialDescription: 'Project Manager',
            contactInfo: 'example.com',
        },
    ];

    return (
        <div className={styles.cardsContainer}>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    initialDescription={card.initialDescription}
                    contactInfo={card.contactInfo}
                />
            ))}
        </div>
    );
};

export default Cards;
