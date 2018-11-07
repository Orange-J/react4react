import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './index.module.scss';

import Home from '../../page/Home';

class Main extends Component {
    render () {
        return (
            <div className={styles.mainWrap}>
                <Route path="/" exact component={Home} />
                <Route path="/page1" render={() => 'Page-1'} />
            </div>
        );
    }
}

export default Main;
