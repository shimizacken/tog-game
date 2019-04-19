import React from 'react';
import PropTypes from 'prop-types'
import styles from './index.module.scss';

const Display = React.memo(({drivingInfo, warningInfo}) => {

    return <div className={styles.root}>
                <div className={styles.innerWrapper}>
                    <div className={styles.screen}>
                        <span className={styles.text}>
                            {drivingInfo}
                        </span>
                        <span className={styles.text}>
                            {warningInfo}
                        </span>
                    </div>
                </div>
           </div>;
});

Display.propTypes = {
    drivingInfo: PropTypes.string,
    warningInfo: PropTypes.string
};

Display.defaultTypes = {
    drivingInfo: undefined,
    warningInfo: undefined
};

export default Display;