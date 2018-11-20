import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import './App.scss';

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div className="App">
                    <div className="header"><Header /></div>
                    <div className="body">
                        <div className="sidebar">
                            {
                            /**
                             * 处理url变化与某组件状态联动的方案：
                             * 用<Route>监听根路径并把component设为要处理的组件，会向component的props传入location对象
                             * 每次url变化时，component所指向的组件内props.location.pathname都会变化
                             */
                            }
                            <Route path="/" component={ Sidebar } />
                        </div>
                        <div className="main"><Main /></div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
