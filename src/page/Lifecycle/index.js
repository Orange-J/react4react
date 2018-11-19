import React, { Component } from 'react';
import styles from './index.module.scss';
import TextBox from './TextBox';
import ArrowLine from './ArrowLine';
import ArrowCurve from './ArrowCurve';

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
                            <div className={`${styles.arrowLineText} xycenter`}>
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

                        <div className={styles.setPropsArrowLine}>
                            <ArrowLine direction="right" height="100%" />
                            <div className={`${styles.arrowLineText} xycenter`}>
                                <span>setProps()</span>
                            </div>
                        </div>

                        <div className={styles.setStateArrowLine}>
                            <div className={styles.arrowLineWrap}>
                                <ArrowLine direction="right" height="100%" />
                            </div>
                            <div className={`${styles.arrowLineText} xycenter`}>
                                <span>setState()</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.updateBox}>
                        {
                            updateBoxData.map((fnName, index) => (
                                <React.Fragment key={fnName}>
                                    <TextBox text={fnName} />
                                    {
                                        index === updateBoxData.length - 1 ? null :
                                            (
                                                <ArrowLine height={
                                                    index === 0 || index === 1 ? 60 : 40
                                                } direction="bottom" lineStyle="dashed" />
                                            )
                                    }
                                </React.Fragment>
                            ))
                        }
                        <div className={`${styles.arrowLineText} ${styles.shouldText}`}>true</div>
                    </div>
                    <div className={styles.canSetStateBox}>can use setState()</div>
                    <ArrowCurve
                        cls={styles.canSetStateLine1}
                        width={190}
                        height={65}
                        startXY="0 0"
                        endXY="190 65"
                        controlXY="0 0"
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine2}
                        width={190}
                        height={65}
                        startXY="0 65"
                        endXY="190 0"
                        controlXY="0 65"
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine3}
                        width={60}
                        height={115}
                        startXY="0 115"
                        endXY="60 0"
                        controlXY="60 0"
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine4}
                        width={120}
                        height={475}
                        startXY="5 0"
                        endXY="60 475"
                        controlXY="200 190"
                    />
                </div>
            </div>
        );
    }
}

export default Lifecycle;
