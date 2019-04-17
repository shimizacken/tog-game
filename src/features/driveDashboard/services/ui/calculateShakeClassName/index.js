const calculateShakeClassName = (drivingStatus, throttleSpeed, styles) => {

    let style;

    if(drivingStatus === false) {
        return style;
    }

    if(throttleSpeed > 80 && throttleSpeed <= 100) {
        return styles.shakeveryveryfast;
    }

    if(throttleSpeed > 60 && throttleSpeed <= 80) {
        return styles.shakeveryfast;
    }
    
    if(throttleSpeed > 40 && throttleSpeed <= 60) {
        return styles.shakefast;
    }

    if(throttleSpeed > 20 && throttleSpeed <= 40) {
        return styles.shakeslow;
    }

    if(throttleSpeed > 0 && throttleSpeed <= 20) {
        return styles.shakeveryslow;
    }

    return style;
};

export default calculateShakeClassName;