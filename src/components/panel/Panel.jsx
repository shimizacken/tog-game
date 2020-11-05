import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Panel.module.scss";

const Panel = ({
  children,
  className,
  classNameInnerWrapper,
  width,
  height,
  minWidth,
  minHeight,
}) => (
  <div
    className={classNames(styles.root, className)}
    style={{
      width: width,
      height: height,
      minWidth: minWidth,
      minHeight: minHeight,
    }}
  >
    <div className={classNames(styles.innerwrapper, classNameInnerWrapper)}>
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
};

Panel.defaultTypes = {
  children: undefined,
  className: undefined,
  width: undefined,
  height: undefined,
  minWidth: undefined,
  minHeight: undefined,
};

export { Panel };
