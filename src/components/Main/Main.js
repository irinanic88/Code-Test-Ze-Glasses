import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__header}>
                <h2 className={styles.main__title}>Glasses</h2>
                <form className={styles.main__form}>
                    <h3 className={styles.main__formHeader}>Color:</h3>
                    <div className={styles.main__formGroup}>
                        <label className={styles.main__label}>
                            <input type="radio" name="color" className={styles.main__input} />
                        </label>
                        <label className={styles.main__label}>
                            <input type="radio" name="color" className={styles.main__input} />
                        </label>
                        <label className={styles.main__label}>
                            <input type="radio" name="color" className={styles.main__input} />
                        </label>
                        <label className={styles.main__label}>
                            <input type="radio" name="color" className={styles.main__input} />
                        </label>
                    </div>
                </form>
            </div>
            <div className={styles.main__body}>

            </div>
        </main>
    )
}

export default Main;