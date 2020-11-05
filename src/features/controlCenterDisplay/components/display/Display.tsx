import React from "react";
import styles from "./Display.module.scss";

const Display: React.FC<{ drivingInfo?: string; warningInfo?: string }> = ({
  drivingInfo,
  warningInfo,
}) => (
  <div className={styles.root}>
    <div className={styles.innerWrapper}>
      <div className={styles.screen}>
        <div className={styles.text}>{drivingInfo}</div>
        <div className={styles.text}>{warningInfo}</div>
      </div>
    </div>
  </div>
);

const memoized = React.memo(Display);

export { memoized as Display };
