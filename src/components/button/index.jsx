import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';

const Button = React.memo(({className, text, onClick}) => {

    return (
        <button 
            className={classNames(styles.root, className)}
            onClick={onClick}
        >
        {text}
        </button>);
});

Button.propTypes = {
    className: PropTypes.string,
    text:  PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultTypes = {
    className: undefined,
    text:  undefined,
    onClick: undefined
};

export default Button;
