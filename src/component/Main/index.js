import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './index.module.scss';

import Home from '../../page/Home';
import Lifecycle from '../../page/Lifecycle';

class Main extends Component {
    render () {
        return (
            <div className={styles.mainWrap}>
                <Route path="/" exact component={Home} />
                <Route path="/lifecycle" component={Lifecycle} />
            </div>
        );
    }
}

export default Main;
