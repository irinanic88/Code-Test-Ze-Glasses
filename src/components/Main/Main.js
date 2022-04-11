import React, { useState } from 'react';
import { products } from '../../utils/data';
import { colorsToFilter, defaultModels } from './utils/variables';
import { filteredModels, pushOrPopItem } from './utils/utils';
import Card from '../Card/Card';
import cn from 'classnames';
import styles from './Main.module.scss';

const Main = () => {
    const [checkedState, setCheckedState] = useState([]);

    const modelsToRender = checkedState.length === 0 ? defaultModels : filteredModels(checkedState);

    const handleColorFilter = (event) => {
        const checkedValue = event.target.value;
        setCheckedState(pushOrPopItem(checkedState, checkedValue));
    }

    const formElement = (title) => {
        return (
            <label className={styles.main__checkbox} key={title}>
                <input type="checkbox"
                       name="color"
                       value={title}
                       checked={checkedState[title]}
                       onChange={handleColorFilter}
                       className={styles.main__input}
                />
                <div className={styles.main__visibleCheckbox}>
                    <div className={styles.main__control}/>
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
                [styles.main__default]: checkedState.length === 0,
                [styles.main__filtered]: checkedState.length !== 0,
            })}>

                {
                    modelsToRender.map((model, index) => {
                        return (
                            <div key={products[model].id}
                                 className={cn(styles[`main__0${index + 1}`], {
                                     [styles.main__filteredCard]: checkedState.length !== 0,
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