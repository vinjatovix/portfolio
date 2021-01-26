import { Link } from "react-router-dom";

export const LinkElement = ({ url, children, handler }) => {
  return (
    <li>
      <Link onMouseOver={handler} to={url}>
        {children}
      </Link>
    </li>
  );
};
