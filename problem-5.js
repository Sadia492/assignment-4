function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    isNaN(serialNumber)
  ) {
    return "Invalid Input";
  }

  if (serialNumber < waitingTimes.length) {
    return "Invalid Input";
  }
  let sum = 0;
  for (const time of waitingTimes) {
    sum += time;
  }
  let avg = Math.round(sum / waitingTimes.length);

  let remainingPeople = serialNumber - waitingTimes.length - 1;
  let remainingTime = remainingPeople * avg;
  return remainingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log(waitingTime([7, 8, 3, 4, 5], NaN));
