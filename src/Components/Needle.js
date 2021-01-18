import React from "react";

export const Needle = ({ type, degrees, color }) => {
    return (
        <p
            className={`AnalogNeedle ${type}`}
            style={{ transform: `rotate(${degrees})`, borderColor: `${color}` }}
        ></p>
    );
};
