import { useState, useEffect } from "react";
import iChing from "i-ching";
import hexagrams from "../db/hexagrams.json";

const findHexagram = (number) => {
  return hexagrams.find((el) => el.id === number);
};

export const useIChing = (question) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    const reading = iChing.ask(question);
    const res = {
      init: findHexagram(reading.hexagram.number),
      cambio: {},
    };
    if (reading?.change !== null) {
      res.cambio = findHexagram(reading.change.to.number);
    }

    console.log(res);
    setState({ data: [reading,res], loading: false });
  }, [question]);
  return state;
};
