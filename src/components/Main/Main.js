import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    const formElement = (title) => {
        return (
            <label className={styles.main__radio} key={title}>
                <input type="radio" name="color" className={styles.main__input} />
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

    const colorsToFilter = ['black', 'silver', 'other'];

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
            <div className={styles.main__body}>

            </div>
        </main>
    )
}

export default Main;