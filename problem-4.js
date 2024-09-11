function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    obj.testScore >= 50 ||
    typeof obj.schoolGrade !== "number" ||
    obj.schoolGrade >= 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  let totalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    totalScore = totalScore + 20;
  }

  return totalScore >= 80;
}
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(calculateFinalScore([0, 1, 2]));
