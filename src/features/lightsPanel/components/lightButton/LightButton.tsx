import React from "react";
import classNames from "classnames";
import { Button } from "../../../../components/button/Button";
import styles from "./LightButton.module.scss";

export const LightButton: React.FC<{
  enabled: boolean,
  text: string,
  onClick: () => void,
}> = ({ enabled, text, onClick }) => (
  <Button
    className={classNames(styles.button, enabled && styles.enabled)}
    text={text}
    onClick={onClick}
  />
);
