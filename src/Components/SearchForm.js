import { useState } from "react";
import { AddSearchQuestion } from "./AddSearchQuestion";
import { ResponseGrid } from "./ResponseGrid";

const Response = (state) => {};

export const SearchForm = (props) => {
  const [state, setState] = useState([]);

  return (
    <>
      <div className={`SearchForm SearchForm${props.type}`}>
        <AddSearchQuestion setState={setState} {...props}></AddSearchQuestion>

        {state.map((question, i) => {
          return (
            <ResponseGrid key={i} question={question} {...props}></ResponseGrid>
          );
        })}
      </div>
    </>
  );
};
