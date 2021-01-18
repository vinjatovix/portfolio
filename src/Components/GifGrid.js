import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=jCK15XVVzdCulTUz8SyZse0cgdEtWYgM`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log("====================================");
    console.log(gifs);
    console.log("====================================");
    setImages(gifs);
  };
  return (
    <>
      <h2> {category}</h2>
      <section className="GifGrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </section>
    </>
  );
};
