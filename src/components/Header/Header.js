import React from 'react';
import { ReactComponent as BurgerMenu } from '../../assets/svg/icon-burger.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg/icon-cart.svg';
import { ReactComponent as Search } from '../../assets/svg/icon-search.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <BurgerMenu className={styles.header__burger} />
            <Logo className={styles.header__logo}/>
            <nav className={styles.header__nav}>
                <a href="#" className={styles.header__navText}>Search</a>
                <a href="#" className={styles.header__navText}>Login</a>
                <Search className={styles.header__search} />
                <Cart className={styles.header__cart} />
            </nav>
        </header>
    )
}

export default Header;