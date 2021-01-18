import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h2> {category}</h2>

      {loading && <p>Cargando...</p>}

      <section className="GifGrid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </section>
    </>
  );
};
