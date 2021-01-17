const padNumber = (number) => `${number}`.padStart(2, "0");
export const updateDate = (date) => {
  const s = padNumber(date.getSeconds());
  const m = padNumber(date.getMinutes());
  const h = padNumber(date.getHours());
  return `${h}:${m}:${s}`;
};
