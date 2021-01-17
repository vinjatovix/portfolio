import { useUpdatedDate } from "../Hooks/useUpdatedDate";

export const Clock = () => {
  const formated = useUpdatedDate();
  return <div className="Clock">{formated}</div>;
};
