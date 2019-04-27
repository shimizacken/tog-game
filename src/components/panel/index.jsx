import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';

const Panel = ({children, className, width, height, minWidth, minHeight}) => {
    return (
        <div 
            className={classNames(styles.root, className)}
            style={{
                width: width,
                height: height,
                minWidth: minWidth,
                minHeight: minHeight
            }}
        >
            <div className={styles.innerwrapper}>
                {children}
            </div>
        </div>
    );
};

Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string
};

Panel.defaultTypes = {
    children: undefined,
    className: undefined,
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined
};

export default Panel;
