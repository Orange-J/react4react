import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const TextBox = props => (
    <div className={styles.TextBox}>
        {props.text}
    </div>
);

TextBox.propTypes = {
    text: PropTypes.string.isRequired
};

export default TextBox;
