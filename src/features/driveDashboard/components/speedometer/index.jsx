import React from 'react';
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
    </div>;
};

export default Speedometer;