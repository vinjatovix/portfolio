export const FormInput = ({ onChange, onSubmit, children, placeholder }) => {
  return (
    <form className={`SearchForm`} onSubmit={onSubmit}>
      <h2>{children}</h2>
      <input type="text" placeholder={placeholder} onChange={onChange}></input>
    </form>
  );
};
