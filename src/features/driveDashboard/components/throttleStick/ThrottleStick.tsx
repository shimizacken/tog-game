import React from "react";
import Slider from "react-input-slider";

export const ThrottleStick: React.FC<{
  speed: number;
  onChange: () => void;
}> = ({ onChange, speed }) => (
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
);
