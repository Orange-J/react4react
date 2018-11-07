import React, { Component } from 'react';
import styles from './index.module.scss';

class Header extends Component {
    render () {
        return (
            <div className={styles.headerWrap}>
                <div className={styles.title}>
                    <div className={styles.logo}></div>
                    <div className={styles.text}>React4React</div>
                </div>
            </div>
        );
    }
}

export default Header;
