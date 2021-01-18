import React, { useState } from "react";
import "../styles/AddGifCategory.css";
import PropTypes from "prop-types";

export const AddGifCategory = ({ setCategories }) => {
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
    <form className="AddGifCategory" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search"
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddGifCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
