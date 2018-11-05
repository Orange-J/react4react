import React, { Component } from 'react';
import Header from './component/Header';
import './App.scss';


class App extends Component {
    render () {
        return (
            <div className="App">
                <div className="header"><Header /></div>
                <div className="body">
                    <div className="sidebar"></div>
                    <div className="main"></div>
                </div>
            </div>
        );
    }
}

export default App;
