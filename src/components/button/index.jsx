import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';

const Button = React.memo(({className, onClick}) => {

    return (
        <button 
            className={classNames(styles.root, className)}
            onClick={onClick}
        >
        </button>);
});

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
