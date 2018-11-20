import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Arrow from '../Arrow';

import { DEFAULT_ARROW_WIDTH } from '../const';

const getLineBoxSize = ({ direction }) => {
    let width, height;
    if (/top|bottom/.test(direction)) {
        width = DEFAULT_ARROW_WIDTH;
        height = '100%';
    } else if (/left|right/.test(direction)) {
        width = '100%';
        height = DEFAULT_ARROW_WIDTH;
    }

    return { width, height };
};

const getLineCls = ({ direction }) => {
    if (/top|bottom/.test(direction)) {
        return 'lineV';
    } else if (/left|right/.test(direction)) {
        return 'lineH';
    }
};

const ArrowLine = props => {
    return (
        <div className={styles.ArrowLine} style={{width: props.width, height: props.height}}>
            <div className={styles.lineBox + ' xycenter'} style={getLineBoxSize(props)}>
                <div className={`${styles[getLineCls(props)]} ${styles[props.lineStyle]} xycenter`}></div>
                {props.showArrow ? (
                    <div className={styles[`${props.direction}Arrow`]}>
                        <Arrow direction="bottom"/>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

ArrowLine.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showArrow: PropTypes.bool,
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    lineStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted'])
};

ArrowLine.defaultProps = {
    width: '100%',
    height: 30,
    showArrow: true,
    lineStyle: 'solid'
};

export default ArrowLine;
