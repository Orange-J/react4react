import React, { Component } from 'react';
import styles from './index.module.scss';
import TextBox from './TextBox';
import ArrowLine from './ArrowLine';

const renderBoxData = [
    'getDefaultProps()',
    'getInitialState()',
    'componentWillMount()',
    'render()',
    'componentDidMount()'
];

const updateBoxData = [
    'componentWillReceiveProps(nextProps)',
    'shouldComponentUpdate(nextProps, nextState)',
    'componentWillUpdate(nextProps, nextState)',
    'render()',
    'componentDidUpdate(prevProps, prevState)'
];

class Lifecycle extends Component {
    render () {
        return (
            <div className={styles.lifecycle}>
                {/* TODO: https://www.wikitechy.com/tutorials/react/reactjs-component-life-cycle */}
                <div className={styles.chart}>
                    <div className={styles.startBox}>
                        <div className={styles.startState}></div>
                        <ArrowLine direction="top" lineStyle="dashed" height={168} />
                        <TextBox text="componentWillUnmount()" />

                        <div className={styles.renderArrowLine}>
                            <ArrowLine direction="right" height="100%" />
                            <div className={`${styles.text} xycenter`}>
                                <span>ReactDOM</span>
                                <br />
                                <span>.render()</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.renderBox}>
                        {
                            renderBoxData.map(fnName => (
                                <React.Fragment key={fnName}>
                                    <TextBox text={fnName} />
                                    <ArrowLine direction="bottom" lineStyle="dashed" />
                                </React.Fragment>
                            ))
                        }
                        <div className={styles.middleStateBox}></div>
                    </div>
                    <div className={styles.updateBox}>
                        {
                            updateBoxData.map((fnName, index) => (
                                <React.Fragment key={fnName}>
                                    <TextBox text={fnName} />
                                    {(index === updateBoxData.length - 1 ? null : <ArrowLine direction="bottom" lineStyle="dashed" />)}
                                </React.Fragment>
                            ))
                        }
                    </div>
                    <div className={styles.setStateBox}>setStateBox</div>
                </div>
            </div>
        );
    }
}

export default Lifecycle;
