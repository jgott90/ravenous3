import React from 'react';
import { TopNav } from './TopNav/TopNav';
import { Logo } from '../../assets/logo';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';


export function LandingPage() {
    return (
        <div >
            <TopNav /> { /* display as 1st child element of landing page */}
            <Logo />
            <SearchBar />
            <SearchSuggestions />
        </div>
    );
}