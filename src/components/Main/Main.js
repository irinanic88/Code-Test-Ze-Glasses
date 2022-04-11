import React, { useState } from 'react';
import { products } from '../../utils/data';
import { colorsToFilter, defaultModels } from './utils/variables';
import { filteredModels } from './utils/utils';
import Card from '../Card/Card';
import cn from 'classnames';
import styles from './Main.module.scss';

const Main = () => {
    const [filter, setFilter] = useState('all');

    const modelsToRender = filteredModels(filter).length === 0 ? defaultModels : filteredModels(filter);

    const handleColorChange = (event) => {
        setFilter(event.target.value);
    }

    const formElement = (title) => {
        return (
            <label className={styles.main__radio} key={title}>
                <input type="radio"
                       name="color"
                       value={title}
                       checked={filter === title}
                       onChange={handleColorChange}
                       className={styles.main__input}
                />
                <div className={styles.main__visibleRadio}>
                    <div className={styles.main__control}>
                        <div className={styles.main__checked}/>
                    </div>
                    <div className={styles.main__label}>
                        {title}
                    </div>
                </div>
            </label>
        )
    }

    return (
        <main className={styles.main}>
            <div className={styles.main__header}>
                <h2 className={styles.main__title}>Glasses</h2>
                <form className={styles.main__form}>
                    <h3 className={styles.main__formHeader}>Color:</h3>
                    <div className={styles.main__formGroup}>
                        {
                            colorsToFilter.map(color => formElement(color))
                        }
                    </div>
                </form>
            </div>
            <div className={cn(styles.main__body, {
                [styles.main__default]: filter === 'all',
                [styles.main__filtered]: filter !== 'all',
            })}>
                {
                    modelsToRender.map(model => {
                        return (
                            <div key={products[model].id}
                                 className={cn(styles[`main__${products[model].id}`], {
                                     [styles.main__filteredCard]: filter !== 'all',
                                 })}
                            >
                                <Card
                                    card={products[model]}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main;