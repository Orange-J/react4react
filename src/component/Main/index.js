import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './index.module.scss';

import Home from '../../page/Home';
import Lifecycle from '../../page/Lifecycle';

class Main extends Component {
    render () {
        return (
            <div className={styles.mainWrap}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lifecycle" component={Lifecycle} />

                    {/* 若上面的路由全都没命中，就重定向到首页 */}
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Main;
