import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../../../components/button/Button";
import styles from "./LightButton.module.scss";

const LightButton = React.memo(({ enabled, text, onClick }) => (
  <Button
    className={classNames(styles.button, enabled && styles.enabled)}
    text={text}
    onClick={onClick}
  />
));

LightButton.propTypes = {
  enabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LightButton;
