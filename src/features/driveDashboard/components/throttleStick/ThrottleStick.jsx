import React from "react";
import PropTypes from "prop-types";
import Slider from "react-input-slider";

const ThrottleStick = React.memo(({ onChange, speed }) => (
  <div>
    <Slider
      onChange={onChange}
      axis="y"
      y={speed}
      styles={{
        track: {
          backgroundColor: "#434343",
        },
        active: {
          backgroundColor: "#222222",
        },
        thumb: {
          width: 80,
          height: 80,
          backgroundColor: "#e06666",
        },
      }}
    />
  </div>
));

ThrottleStick.propTypes = {
  onChange: PropTypes.func,
  speed: PropTypes.number,
};

ThrottleStick.defaultProps = {
  onChange: undefined,
  speed: undefined,
};

export { ThrottleStick };
