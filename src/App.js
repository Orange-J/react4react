import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import './App.scss';

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div className="App">
                    <div className="header"><Header/></div>
                    <div className="body">
                        <div className="sidebar"><Sidebar/></div>
                        <div className="main"><Main/></div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
