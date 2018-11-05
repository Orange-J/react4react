import React, { Component } from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header"></div>
                <div className="body">
                    <div className="sidebar"></div>
                    <div className="main"></div>
                </div>
            </div>
        );
    }
}

export default App;
