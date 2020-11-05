import React from "react";
import classNames from "classnames";
import styles from "./Panel.module.scss";

export const Panel: React.FC<
  React.ComponentProps<"div"> & {
    classNameInnerWrapper?: string,
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
  }
> = ({
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
