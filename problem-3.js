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

console.log(checkDigitsInName("snigdha12"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
