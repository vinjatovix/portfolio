import { ResponseGrid } from "./ResponseGrid";

export const Response = ({ state, props }) => {
  const res = state.map((question, i) => {
    return <ResponseGrid key={i} question={question} {...props}></ResponseGrid>;
  });
  return res;
};
