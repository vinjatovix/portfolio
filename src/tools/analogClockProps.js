export function analogClockProps(date) {
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();
  const colorHoras = horas % 12 === 0 ? "gold" : "#ff330091";
  const colorMinutos = minutos % 15 === 0 ? "gold" : "#33ff0091";
  const colorSegundos = segundos % 15 === 0 ? "gold" : "#0059ff91";
  const fase = 90;
  const gradosHoras = (horas / 12) * 360 + (minutos / 60) * 30 + fase + "deg";
  const gradosMinutos =
    (minutos / 60) * 360 + (segundos / 60) * 6 + fase + "deg";
  const gradosSegundos = (segundos / 60) * 360 + fase + "deg";
  return {
    gradosHoras,
    colorHoras,
    gradosMinutos,
    colorMinutos,
    gradosSegundos,
    colorSegundos,
  };
}
