import React from 'react'
import styles from './SearchResultsSummary.module.css'

export function SearchResultsSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 class="subtitle"><strong>burgers</strong> berlin</h1>
                <p>Showing 1-20 out of 543 results</p>
            </div>
            <div className={styles.filters}>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    <span>All Filters</span>
                </button>

                <div class="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>

                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-clock"></i>
                    </span>
                    <span>Open Now</span>
                </button>

                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>

    );
}