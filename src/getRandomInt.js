const getRandomInt = (minNumber, maxNumber) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min) + min); // max не включается, min включается
};

export default getRandomInt;
