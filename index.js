const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = "~`!@#$%^&*()_+=-[]}{;':/?";
const numberChars = "1234567890";
const generateBtn = document.querySelector("#generateBtn");
const passwordResult = document.querySelector("#passwordResult");
const copyBtn = document.querySelector("#copyBtn");

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

  if (passwordLength > 1) {
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
  } else {
    return `Password must contain at least 1 character`;
  }
}

generateBtn.addEventListener("click", () => {
  let passwordLength = document.querySelector("#inputNumber").value;
  let includesLowerCaseChars = document.querySelector(".lower").checked;
  let includesUpperCaseChars = document.querySelector(".upper").checked;
  let includesSymbolChars = document.querySelector(".sym").checked;
  let includesNumberChars = document.querySelector(".numb").checked;

  const result = passwordGenerate(
    passwordLength,
    includesLowerCaseChars,
    includesUpperCaseChars,
    includesSymbolChars,
    includesNumberChars,
  );

  passwordResult.style.display = "flex";
  passwordText.textContent = result;

  copyBtn.addEventListener("click", () => {
    const text = result;
    navigator.clipboard.writeText(result);
    console.log("Copied", result);
  });
});
