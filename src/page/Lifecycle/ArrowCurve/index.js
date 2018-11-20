import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../Arrow';
import styles from './index.module.scss';

const lineStyleConfig = {
    solid: {
        strokeWidth: 2
    },
    dashed: {
        strokeWidth: 2,
        strokeDasharray: '5 6',
        strokeDashoffset: 2
    },
    dotted: {
        strokeWidth: 4,
        strokeDasharray: '1 10',
        strokeDashoffset: 2
    }
};

const getCurvePath = ({startXY, endXY, controlXY}) => {
    return `M${startXY} Q${controlXY} ${endXY}`;
};

const getArrowWrapStyle = ({endXY, arrowAngle, arrowOffsetXY}) => {
    endXY = endXY.split(/\s+/).map(Number);
    return {
        left: endXY[0] + arrowOffsetXY[0],
        top: endXY[1] + arrowOffsetXY[1],
        transform: `rotate(${arrowAngle}deg)`
    };
};

const ArrowCurve = props => (
    <div className={`${styles.ArrowCurve} ${props.cls}`} style={{width: props.width, height: props.height}}>
        <svg width="100%" height="100%" version="1.1">
            <path
                d={getCurvePath(props)}
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                {...lineStyleConfig[props.lineStyle]}
            ></path>
        </svg>
        {props.showArrow ? (
            <div
                className={styles.arrowWrap}
                style={getArrowWrapStyle(props)}
            >
                <Arrow direction="top" />
            </div>
        ) : null}
        {props.children}
    </div>
);

ArrowCurve.propTypes = {
    cls: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    startXY: PropTypes.string,
    endXY: PropTypes.string,
    controlXY: PropTypes.string,
    showArrow: PropTypes.bool,
    arrowAngle: PropTypes.number, // 箭头默认指向上方，通过此选项控制箭头的顺时针旋转角度
    arrowOffsetXY: PropTypes.array,
    lineStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
    children: PropTypes.node
};

ArrowCurve.defaultProps = {
    cls: '',
    width: 100,
    height: 50,
    startXY: '0 0',
    endXY: '100 50',
    controlXY: '0 50',
    showArrow: true,
    arrowAngle: 0,
    arrowOffsetXY: [0, 0],
    lineStyle: 'solid'
};

export default ArrowCurve;
