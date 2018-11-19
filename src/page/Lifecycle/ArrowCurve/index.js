import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const getCurvePath = ({startXY, endXY, controlXY}) => {
    return `M${startXY} Q${controlXY} ${endXY}`;
};

const ArrowCurve = props => (
    <div className={`${styles.ArrowCurve} ${props.cls}`} style={{width: props.width, height: props.height}}>
        <svg width="100%" height="100%" version="1.1">
            <path
                d={getCurvePath(props)}
                stroke="#000000"
                strokeWidth="4"
                fill="none"
                strokeDasharray="1 10"
                strokeDashoffset="2"
                strokeLinecap="round"
            ></path>
        </svg>
    </div>
);

ArrowCurve.propTypes = {
    cls: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    startXY: PropTypes.string,
    endXY: PropTypes.string,
    controlXY: PropTypes.string,
    arrowAngle: PropTypes.number,
    lineStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted'])
};

ArrowCurve.defaultProps = {
    cls: '',
    width: 100,
    height: 50,
    startXY: '0 0',
    endXY: '100 50',
    controlXY: '0 50',
    arrowAngle: 90,
    lineStyle: 'solid'
};

export default ArrowCurve;
