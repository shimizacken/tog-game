import React from "react";
import classNames from "classnames";
import { DrivingButtonStates } from "../../services/ui/enums/drivingButtonStates";
import { Button } from "../../../../components/button/Button";
import styles from "./DriveButton.module.scss";

export const DrivingButton: React.FC<{
  drivingButtonStates: string;
  onClick: () => void;
}> = ({ drivingButtonStates, onClick }) => {
  let color;

  if (drivingButtonStates === DrivingButtonStates.TURNED_OFF) {
    color = styles.turnedoff;
  }

  if (drivingButtonStates === DrivingButtonStates.READY) {
    color = styles.ready;
  }

  if (drivingButtonStates === DrivingButtonStates.DRIVE) {
    color = styles.drive;
  }

  if (drivingButtonStates === DrivingButtonStates.ERROR) {
    color = styles.error;
  }

  if (drivingButtonStates === DrivingButtonStates.SWITCHING) {
    color = styles.blink;
  }

  return (
    <Button
      className={classNames(styles.root, color)}
      onClick={onClick}
    ></Button>
  );
};
