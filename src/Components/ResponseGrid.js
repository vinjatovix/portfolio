import { GifGrid } from "./GifGrid";

export const ResponseGrid = ({ question, hook, type }) => {
  const { data, loading } = hook(question);

  if (type === "Gifs") {
    return <GifGrid data={data} type={type}></GifGrid>;
  }

  if (type === "IChing") {
    let cambio = "";
    if (data[0]?.change !== null) {
      cambio = (
        <>
          <p style={{ color: "red" }}>Muta en</p>
          <h2>
            {data[0]?.change?.to.number}.- {data[1]?.cambio.nombre}
          </h2>
          <h3>Juicio: </h3>
          <p>{data[1]?.cambio.juicio}</p>
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
          {data[0]?.hexagram.number}.- {data[1]?.init.nombre}
        </h2>
        <h3>Juicio:</h3>
        <p>{data[1]?.init.juicio}</p>

        {cambio}
      </section>
    );
  }
};
