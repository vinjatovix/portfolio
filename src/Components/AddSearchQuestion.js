import { useState } from "react";
import { FormInput } from "./FormInput";

export const AddSearchQuestion = ({ setState, children, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setState(() => [inputValue]);
    }
  };
  const formInputProps = {
    className: "SearchForm",
    placeholder: placeholder,
    onSubmit: handleSubmit,
    onChange: handleInputChange,
  };
  return <FormInput {...formInputProps}>{children}</FormInput>;
};
