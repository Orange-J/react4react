import React from 'react';
import styles from './index.module.scss';

const ArrowLine = props => (
    <div className={styles.ArrowLine}>
        <div className={styles.lineBox}>
            <svg width="12" height="50" version="1.1">
                <path d="M6 0 V 50" stroke="black" />
                <path d="M6 50 l6 -14 l-6 3 l-6 -3" stroke="black" fill="black" />
            </svg>
        </div>
    </div>
);

export default ArrowLine;
