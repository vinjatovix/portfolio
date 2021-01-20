import { useState } from "react";
import { GifGridItem } from "./GifGridItem";

const Form = ({ onChange, onSubmit, children }) => {
  return (
    <form className={`SearchForm`} onSubmit={onSubmit}>
      <h2>{children}</h2>
      <input type="text" placeholder="Search" onChange={onChange}></input>
    </form>
  );
};

const AddSearchQuestion = ({ setCategories, children }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories(() => [inputValue]);
    }
  };

  return (
    <Form
      className="SearchForm"
      onSubmit={handleSubmit}
      onChange={handleInputChange}
    >
      {children}
    </Form>
  );
};

const ResponseGrid = ({ question, hook, type }) => {
  const { data, loading } = hook(question);

  if (type === "Gifs") {
    return (
      <section className={`${type}Grid`}>
        {data.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </section>
    );
  }
  if (type === "IChing") {
    console.log("dataaaa", data[0]);
    let cambio = "";
    if (data[0]?.change?.to.character.length !== 0) {
      cambio = (
        <>
          <h2>
            {data[0]?.change?.to.number}.- {data[0]?.change?.to.names.join(" ")}
          </h2>
          <a
            href={`https://www.adivinario.com/i_ching_desc_${data[0]?.change?.to.number}.php`}
            target="_blank"
            rel="noreferrer"
          >
            Web {data[0]?.change?.to.number}
          </a>
        </>
      );
    }
    return (
        <section className={`${type}Grid`}>
            {loading && "cargando... ... "}
        <h3>{question}</h3>
        <h1>
          {data[0]?.hexagram.character} {data[0]?.change?.to.character}
        </h1>
        <h2>
          {data[0]?.hexagram.number}.- {data[0]?.hexagram.names.join(" ")}
        </h2>
        <a
          href={`https://www.adivinario.com/i_ching_desc_${data[0]?.hexagram.number}.php`}
          target="_blank"
          rel="noreferrer"
        >
          Web {data[0]?.hexagram.number}
        </a>
        {cambio}
      </section>
    );
  }
};

export const SearchForm = (props) => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className={`SearchForm SearchForm${props.type}`}>
        <AddSearchQuestion setCategories={setCategories}>
          {props.children}
        </AddSearchQuestion>

        {categories.map((question, i) => {
          return (
            <ResponseGrid
              key={i}
              question={question}
              hook={props.hook}
              type={props.type}
            ></ResponseGrid>
          );
        })}
      </div>
    </>
  );
};
