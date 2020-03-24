import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

export function SubNav() {
    return (
        <div>
            <SubNavItem label='Restaurants' icon='fa-utensils'/>
            <SubNavItem label ='Home Services' icon='fa-home'/>
            <SubNavItem label = 'AutoServices' icon='fa-car'/>
            <SubNavItem label = 'More' icon='fa-info' showRightBorder/>
        </div>
    );
}