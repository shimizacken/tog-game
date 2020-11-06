export type ShakeStyles = {
  shakeveryveryfast?: string;
  shakeveryfast?: string;
  shakefast?: string;
  shakeslow?: string;
  shakeveryslow?: string;
};

export const calculateShakeClassName = (
  drivingStatus: boolean,
  throttleSpeed: number,
  styles: ShakeStyles
) => {
  if (drivingStatus === false) {
    return;
  }

  if (throttleSpeed > 80 && throttleSpeed <= 100) {
    return styles.shakeveryveryfast;
  }

  if (throttleSpeed > 60 && throttleSpeed <= 80) {
    return styles.shakeveryfast;
  }

  if (throttleSpeed > 40 && throttleSpeed <= 60) {
    return styles.shakefast;
  }

  if (throttleSpeed > 20 && throttleSpeed <= 40) {
    return styles.shakeslow;
  }

  if (throttleSpeed > 0 && throttleSpeed <= 20) {
    return styles.shakeveryslow;
  }

  return;
};
