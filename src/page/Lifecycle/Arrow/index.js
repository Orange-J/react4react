/**
 * 箭头组件
 * props中的width和height并不是传统意义上DOM元素的宽高， 而是：
 *   width: 箭头底边的长度
 *   height: 箭头底边到尖端顶点的高度
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_ARROW_WIDTH, DEFAULT_ARROW_HEIGHT} from '../const';

const getArrowPath = (w, h, sunken) => {
    return [
        `M${w / 2} ${h}`,
        `l${w / 2} -${h}`,
        `l-${w / 2} ${sunken}`,
        `l-${w / 2} -${sunken}`
    ].join(' ');
};

const Arrow = props => (
    <div style={{width: props.width, height: props.height}}>
        <svg width={props.width} height={props.height} version="1.1">
            <path d={getArrowPath(props.width, props.height, props.sunken)} stroke="black" fill="black" />
        </svg>
    </div>
);

Arrow.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    sunken: PropTypes.number,
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
};

Arrow.defaultProps = {
    width: DEFAULT_ARROW_WIDTH,
    height: DEFAULT_ARROW_HEIGHT,
    sunken: 3
};

export default Arrow;
