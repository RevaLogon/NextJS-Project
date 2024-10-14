import React, { useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
    title: string;
    initialDescription: string;
    contactInfo: string;
}

const Card: React.FC<CardProps> = ({ title, initialDescription, contactInfo }) => {
    const [description, setDescription] = useState(initialDescription);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.logoContainer}>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    className={styles.descriptionInput}
                    placeholder="Enter description"
                />
                <p className={styles.contact}>{contactInfo}</p>
                <p className={styles.displayedDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
