import React from 'react';
import { currency } from '../../utils/variables';
import styles from './Card.module.scss';

const Card = ({card}) => {
    const {id, manufacturer, description, color, price, imageURL} = card;
    const convertToUpperCase = (string) => string.toUpperCase();

    const model = convertToUpperCase(id);
    const brand = convertToUpperCase(manufacturer);

    return (
        <a href="#" text={`${brand} ${model}`} className={styles.card}>
            <img alt={`${brand} ${model}`} src={imageURL} className={styles.card__img}/>
            <span className={styles.card__textBlock}>
                <p className={styles.card__brand}>{brand}</p>
                <p className={styles.card__description}>{description}</p>
                <p className={styles.card__model}>Model ref: {model}</p>
                <p className={styles.card__price}>{`${price.toFixed(2)} ${currency}`}</p>
            </span>
        </a>
    )
}

export default Card;