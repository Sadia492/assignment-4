function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let separate = email.split("@");
  let userName = separate[0];
  let domainName = separate[1];
  let notification = `${userName} sent you an email from ${domainName}`;
  return notification;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let hasDigit;
  for (const letter of name) {
    if (!isNaN(letter)) {
      hasDigit = true;
    } else {
      hasDigit = false;
    }
  }
  return hasDigit;
}

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
