import React from 'react';
import classNames from 'classnames';
import rangeMapper from 'range-mapper';
import styles from './index.module.scss';

const Speedometer = ({speed}) => {

    const interpolate = rangeMapper.clamped(0, 100, -90, 90);

    let deg = interpolate(speed);

    return <div className={styles.root}>
        <div
            className={styles.hand}
            style={{
                transform: `rotate(${deg}deg)`
            }}
        >
        </div>
        <div className={styles.innercover}></div>
        <span className={classNames(styles.label, styles.label0)}>0</span>
        <span className={classNames(styles.label, styles.label50)}>50</span>
        <span className={classNames(styles.label, styles.label100)}>100</span>
    </div>;
};

export default Speedometer;