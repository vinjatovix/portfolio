import React from "react";
import { analogClockProps } from "../tools/analogClockProps";

export function useAnalogClock() {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const props = analogClockProps(date);
  return props;
}
