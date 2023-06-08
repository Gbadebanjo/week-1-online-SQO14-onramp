function calculateGrade(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  const average = sum / marks.length;
  if (average <= 49) {
    return "F";
  } else if (average <= 59) {
    return "E";
  } else if (average <= 69) {
    return "D";
  } else if (average <= 79) {
    return "C";
  } else if (average <= 89) {
    return "B";
  } else {
    return "A";
  }
}
module.exports = calculateGrade;
console.log(calculateGrade([89, 50, 40, 90, 77]));



// Solved