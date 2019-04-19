import React from 'react';
import PropTypes from 'prop-types'
import styles from './index.module.scss';

const Display = React.memo(({drivingInfo}) => {

    return <div className={styles.root}>
                <div className={styles.innerWrapper}>
                    <div className={styles.screen}>
                        <span className={styles.text}>
                            {drivingInfo}
                        </span>
                    </div>
                </div>
           </div>;
});

Display.propTypes = {
    drivingInfo: PropTypes.string
};

Display.defaultTypes = {
    drivingInfo: undefined
};

export default Display;