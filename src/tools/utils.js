export const encode = (username, password) => {
  return btoa(`${username}:${password}`);
}

export const scale = (min, max, scalemin, scalemax, val) => {
  let factor = val / (max - min);
  return ((scalemax - scalemin) * factor) + scalemin
}

export const fixedNotation = (num, places, map) => {
  if (num < 1) return num.toFixed(places);
  let components = num.toExponential(places).split('e+').map(Number);
  let factor = components[1] % 3;
  let value = (components[0] * (factor > 0 ? Math.pow(10, factor) : 1)).toFixed(places);
  let denom = map[components[1] - factor];
  return `${value}${denom}`;
}