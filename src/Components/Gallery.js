import "../styles/Gallery.css";

export const Gallery = () => {
  const handleMouseOver = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div className="Gallery">
      <Panel
        number={1}
        handler={handleMouseOver}
        children={{ top: "Hey", middle: "Let's", bottom: "Dance" }}
      ></Panel>
      <Panel
        number={2}
        handler={handleMouseOver}
        children={{ top: "Give", middle: "Take", bottom: "Receive" }}
      ></Panel>
      <Panel
        number={3}
        handler={handleMouseOver}
        children={{ top: "Experience", middle: "It", bottom: "Today" }}
      ></Panel>
      <Panel
        number={4}
        handler={handleMouseOver}
        children={{ top: "Give", middle: "All", bottom: "Your best" }}
      ></Panel>
      <Panel
        number={5}
        handler={handleMouseOver}
        children={{ top: "Life", middle: "In", bottom: "Motion" }}
      ></Panel>


    </div>
  );
};
const Panel = ({ number, handler, children }) => {
  return (
    <div className={`Panel panel${number}`} onMouseOver={handler}>
      <p>{children.top}</p>
      <p>{children.middle}</p>
      <p>{children.bottom}</p>
    </div>
  );
};
