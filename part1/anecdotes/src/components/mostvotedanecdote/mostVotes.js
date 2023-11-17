const mostVotes = (object) => {
  let maxValor = -Infinity;
  let maxLlave = null;

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element > maxValor) {
        maxValor = element;
        maxLlave = key;
      }
    }
  }
  return maxLlave;
};

export default mostVotes;
