let passwordLength = 12;
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = "~`!@#$%^&*()_+=-[]}{;':/?";
const numberChars = "1234567890";

let includesLowerCaseChars = true;
let includesUpperCaseChars = true;
let includesSymbolChars = true;
let includesNumberChars = true;

function passwordGenerate(
  passwordLength,
  includesLowerCaseChars,
  includesUpperCaseChars,
  includesSymbolChars,
  includesNumberChars,
) {
  let password = "";
  const countIncludes = [
    includesLowerCaseChars,
    includesUpperCaseChars,
    includesSymbolChars,
    includesNumberChars,
  ].filter(Boolean).length;
  const numOfIterations = passwordLength / countIncludes;

  for (let i = 0; i <= numOfIterations; i++) {
    if (password.length < passwordLength && includesLowerCaseChars == true) {
      password +=
        lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    }
    if (password.length < passwordLength && includesUpperCaseChars == true) {
      password +=
        upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    }
    if (password.length < passwordLength && includesSymbolChars == true) {
      password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }
    if (password.length < passwordLength && includesNumberChars == true) {
      password += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
  }
  return password;
}

const password = passwordGenerate(4, true, true, true, true);

console.log(password);
