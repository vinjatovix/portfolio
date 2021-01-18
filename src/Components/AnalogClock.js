import "../styles/AnalogClock.css";
import React from "react";
import { useAnalogClock } from "../Hooks/useAnalogClock";
import { Needle } from "./Needle";

export const AnalogClock = () => {
  const props = useAnalogClock();
  return (
    <header className="AnalogClock">
      <section className="AnalogClock-body">
        <Needle
          type="AnalogHours"
          degrees={props.gradosHoras}
          color={props.colorHoras}
        ></Needle>
        <Needle
          type="AnalogMinutes"
          degrees={props.gradosMinutos}
          color={props.colorMinutos}
        ></Needle>
        <Needle
          type="AnalogSeconds"
          degrees={props.gradosSegundos}
          color={props.colorSegundos}
        ></Needle>

      </section>
    </header>
  );
};


