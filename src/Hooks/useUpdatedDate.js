import React from "react";
import { updateDate } from "../tools/padNumber";

export function useUpdatedDate() {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const formated = updateDate(date);
  return formated;
}
