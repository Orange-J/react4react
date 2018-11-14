import React, { Component } from 'react';
import styles from './index.module.scss';

class Lifecycle extends Component {
    render () {
        return (
            <div className={styles.lifecycle}>
                {/* TODO: https://www.wikitechy.com/tutorials/react/reactjs-component-life-cycle */}
                <div className={styles.chart}>
                    <div className={styles.startBox}>startBox</div>
                    <div className={styles.renderBox}>renderBox</div>
                    <div className={styles.updateBox}>updateBox</div>
                    <div className={styles.middleStateBox}>middleStateBox</div>
                    <div className={styles.setStateBox}>setStateBox</div>
                </div>
            </div>
        );
    }
}

export default Lifecycle;
