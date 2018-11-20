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

                    {/* 起始状态 */}
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

                    {/* render过程区 */}
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

                        <ArrowCurve
                            cls={styles.shouldUpdateToMounted}
                            width={110}
                            height={85}
                            startXY="120 80"
                            endXY="0 0"
                            controlXY="20 50"
                            lineStyle="dashed"
                            arrowAngle={333}
                            arrowOffsetXY={[-2, 0]}
                        >
                            <div className={`${styles.arrowLineText} ${styles.text}`}>false</div>
                        </ArrowCurve>

                        <ArrowCurve
                            cls={styles.mountedToWillUpdate}
                            width={130}
                            height={180}
                            startXY="2 0"
                            endXY="130 180"
                            controlXY="20 120"
                            lineStyle="solid"
                            arrowAngle={118}
                            arrowOffsetXY={[-13, -11]}
                        >
                            <div className={`${styles.arrowLineText} ${styles.text}`}>forceUpdate()</div>
                        </ArrowCurve>

                        <ArrowCurve
                            cls={styles.mountedToWillUnmount}
                            width={270}
                            height={124}
                            startXY="270 122"
                            endXY="0 0"
                            controlXY="20 120"
                            lineStyle="solid"
                            arrowAngle={345}
                            arrowOffsetXY={[-4, 0]}
                        >
                            <div className={`${styles.arrowLineText} ${styles.text}`}>
                                <span>ReactDOM</span>
                                <br />
                                <span>.unmountComponentAtNode()</span>
                            </div>
                        </ArrowCurve>

                        <ArrowCurve
                            cls={styles.didUpdateToMounted}
                            width={180}
                            height={340}
                            startXY="180 340"
                            endXY="40 0"
                            controlXY="-50 240"
                            lineStyle="dashed"
                            arrowAngle={20}
                            arrowOffsetXY={[-8, -2]}
                        />
                    </div>

                    {/* update过程区 */}
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

                    {/* can-use-setState()及其几条关系线 */}
                    <div className={styles.canSetStateBox}>can use setState()</div>
                    <ArrowCurve
                        cls={styles.canSetStateLine1}
                        width={190}
                        height={65}
                        startXY="0 0"
                        endXY="190 65"
                        controlXY="0 0"
                        lineStyle="dotted"
                        showArrow={false}
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine2}
                        width={190}
                        height={65}
                        startXY="0 65"
                        endXY="190 0"
                        controlXY="0 65"
                        lineStyle="dotted"
                        showArrow={false}
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine3}
                        width={60}
                        height={115}
                        startXY="0 115"
                        endXY="60 0"
                        controlXY="60 0"
                        lineStyle="dotted"
                        showArrow={false}
                    />
                    <ArrowCurve
                        cls={styles.canSetStateLine4}
                        width={120}
                        height={475}
                        startXY="5 0"
                        endXY="60 475"
                        controlXY="200 190"
                        lineStyle="dotted"
                        showArrow={false}
                    />
                </div>
            </div>
        );
    }
}

export default Lifecycle;
