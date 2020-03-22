import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../../assets/logo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';


export function LandingPage() {
    return (
        <div className={styles.landing}>
            <div>
                <TopNav /> { /* display as 1st child element of landing page */}

                <div className={styles['search-area']}>
                    <img src={logo} className={styles.logo} alt='logo' />
                    <SearchBar />
                    <SearchSuggestions />
                </div>
            </div>
        </div>
    );
}