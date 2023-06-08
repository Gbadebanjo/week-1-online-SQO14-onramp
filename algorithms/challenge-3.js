function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

module.exports = sumMix;
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))



//Solved