import { useState, useEffect } from "react";
import iChing from "i-ching";

export const useIChing = (question) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    const reading = iChing.ask(question);
    setState({ data: [reading], loading: false });
  }, [question]);
  return state;
};
