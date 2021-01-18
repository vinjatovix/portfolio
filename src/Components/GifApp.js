import { useState } from "react";
import { AddGifCategory } from "./AddGifCategory";
import { GifGrid } from "./GifGrid";
export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>Gif Search Engine</h2>
      <AddGifCategory setCategories={setCategories}></AddGifCategory>
        {categories.map((cat, i) => (
          <GifGrid key={i} category={cat}></GifGrid>
        ))}
    </>
  );
};
