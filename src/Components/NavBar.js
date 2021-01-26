import { useState } from "react";
import { LinkElement } from "./LinkElement";
export const NavBar = () => {
  const [name, setName] = useState("Pablo Viña");
  const [fontColor, setFontColor] = useState("#ffffff");

  const handleColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setFontColor(`#${randomColor}`);
  };

  const handlerName = () => {
    name === "Pablo Viña" ? setName("Vinjadevix") : setName("Pablo Viña");
  };
  return (
    <>
      <h1 onMouseOver={handlerName} style={{ color: fontColor }}>
        {name}
      </h1>
      <ul className="NavBar">
        {/* <LinkElement handler={handleColor} url="/gifs">
          Gifs
        </LinkElement> */}
        <LinkElement handler={handleColor} url="/iching">
          I-Ching
        </LinkElement>
        <LinkElement handler={handleColor} url="/gallery">
          Gallery
        </LinkElement>
      </ul>
    </>
  );
};
