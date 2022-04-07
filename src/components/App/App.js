import React from 'react';
import Header from '../Header/Header';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    )
}

export default App;