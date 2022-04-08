import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Main />
        </div>
    )
}

export default App;