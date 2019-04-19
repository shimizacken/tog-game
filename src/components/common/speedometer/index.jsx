import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';

const Speedometer = React.memo(({speed}) => {

    return <div className={styles.root}>
        <div
            className={styles.hand}
            style={{
                transform: `rotate(${speed}deg)`
            }}
        >
        </div>
        <div className={styles.innercover}></div>
        <span className={classNames(styles.label, styles.label0)}>0</span>
        <span className={classNames(styles.label, styles.label50)}>50</span>
        <span className={classNames(styles.label, styles.label100)}>100</span>
    </div>;
});

Speedometer.propTypes = {
    speed: PropTypes.number.isRequired
};

export default Speedometer;