import React, { Component } from 'react';
import styles from './index.module.scss';

class Home extends Component {
    render () {
        return (
            <div className={styles.homepage}>
                <div className={styles.textBox}>
                    <div className={styles.title}>React for React</div>
                    <div className={styles.introduce}>Something about ReactJS, written in ReactJS.</div>
                </div>
            </div>
        );
    }
}

export default Home;
