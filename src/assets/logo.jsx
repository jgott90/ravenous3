import React from 'react';
import styles from './Logo.module.css';

export function Logo() {
    return (
        <div className={styles.logo}>
            <span className={styles.logo_icon}>HELP!!</span><span className="icon is-small" className={styles.logo_icon}><i className="fas fa-hands-helping"></i></span>
        </div>
    );
}