import { useState, useEffect } from "react";
import { getGifs } from "../tools/getGifs";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);
  console.log(state)
  return state;
};
