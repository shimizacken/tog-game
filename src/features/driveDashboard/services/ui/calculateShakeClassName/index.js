const calculateShakeClassName = (drivingStatus, throttleSpeed, styles) => {

    if(drivingStatus === false) {
        return;
    }

    let style;

    if(throttleSpeed > 80 && throttleSpeed <= 100) {
        style = styles.shakeveryveryfast;
    }

    if(throttleSpeed > 60 && throttleSpeed <= 80) {
        style = styles.shakeveryfast;
    }
    
    if(throttleSpeed > 40 && throttleSpeed <= 60) {
        style = styles.shakefast;
    }

    if(throttleSpeed > 20 && throttleSpeed <= 40) {
        style = styles.shakeslow;
    }

    if(throttleSpeed > 0 && throttleSpeed <= 20) {
        style = styles.shakeveryslow;
    }

    return style;
};

export default calculateShakeClassName;