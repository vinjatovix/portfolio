import { GifGrid } from "./GifGrid";

export const ResponseGrid = ({ question, hook, type }) => {
  const { data, loading } = hook(question);

  if (type === "Gifs") {
    return <GifGrid data={data} type={type}></GifGrid>;
  }

  if (type === "IChing") {
    let cambio = "";
    console.log("data0", data[0]);
    if (data[0]?.change !== null) {
      cambio = (
        <>
          <p style={{ color: "red" }}>Muta en</p>
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
