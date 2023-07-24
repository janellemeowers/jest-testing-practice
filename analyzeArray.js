export default analyzeArray = (array) => {
  let length = array.length;

  let min = Math.min(...array);

  let max = Math.max(...array);

  //get avg, min, max, length
  let sum = array.reduce((total, currentVal) => total + currentVal);

  let avg = sum / length;

  let arrayObj = {
    average: avg,
    min: min,
    max: max,
    length: length,
  };

  return arrayObj;
};
