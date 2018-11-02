import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Test</Button>
                <div className="scss-test">Sass-test</div>
            </div>
        );
    }
}

export default App;
