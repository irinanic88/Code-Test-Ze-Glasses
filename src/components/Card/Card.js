import React from 'react';
import { currency } from '../../utils/variables';
import styles from './Card.module.scss';

const Card = ({card}) => {
    const {id, manufacturer, description, color, price, imageURL} = card;
    const convertToUpperCase = (string) => string.toUpperCase();

    const model = convertToUpperCase(id);
    const brand = convertToUpperCase(manufacturer);

    return (
        <div>
            <img alt={`${brand} ${model}`} src={imageURL}/>
            <p>{brand}</p>
            <p>{description}</p>
            <p>Model ref: {model}</p>
            <p>{`${price.toFixed(2)} ${currency}`}</p>
        </div>
    )
}

export default Card;