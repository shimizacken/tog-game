import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button: React.FC<
  React.ComponentProps<"button"> & {
    text?: string;
    onClick: () => void;
  }
> = ({ text, className, onClick }) => (
  <button className={classNames(styles.root, className)} onClick={onClick}>
    {text}
  </button>
);
