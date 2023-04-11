const password = document.getElementById("password-generator");
const num = document.getElementById("num");
const line = document.getElementById("line");
const range = document.getElementById("range");
const checkOne = document.getElementById("letter1");
const checkTwo = document.getElementById("letter2");
const checkTree = document.getElementById("letter3");
const checkFour = document.getElementById("letter4");
const copied = document.getElementById("copy-info");
const arrowBtn = document.getElementsByClassName("arrow")[0];

/////////
const rectaNoColor = document.getElementById("recta-no-color");
const tooWeak = document.getElementById("recta-too-weak");
const weak = document.getElementById("recta-weak");
const mediumRecta = document.getElementById("recta-medium");
const rectaStrong = document.getElementById("recta-strong");

let rangeSize = 10;

function copyText() {
  let passwordElement = password.innerText;
  const tempInput = document.createElement("input");
  tempInput.type = "text";
  tempInput.value = passwordElement;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  copied.style.display = "block";
}

range.addEventListener("input", (event) => {
  rangeSize = event.target.value;
  line.style.width = `${5 * rangeSize}%`;
  num.innerText = rangeSize;
});

function generatorRandom() {
  let checkedPassword = "";
  let countRange = 0;

  if (checkOne.checked) {
    checkedPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    countRange++;
  }
  if (checkTwo.checked) {
    checkedPassword += "abcdefghijklmnopqrstuvwxyz";
    countRange++;
  }

  if (checkTree.checked) {
    checkedPassword += "0123456789";
    countRange++;
  }
  if (checkFour.checked) {
    checkedPassword += "!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    countRange++;
  }
  let passwordGenerator = "";
  for (let i = 0; i < range.value; i++) {
    let randomValue = Math.floor(Math.random() * checkedPassword.length);
    passwordGenerator += checkedPassword[randomValue];
  }

  if (
    checkOne.checked ||
    checkTwo.checked ||
    checkTree.checked ||
    checkFour.checked
  ) {
    password.innerHTML = passwordGenerator;
  } else {
    password.innerHTML = "";
  }
  if (countRange == 0) {
    rectaNoColor.style.display = "flex";
    tooWeak.style.display = "none";
    weak.style.display = "none";
    mediumRecta.style.display = "none";
    rectaStrong.style.display = "none";
  }

  if (countRange == 1) {
    rectaNoColor.style.display = "none";
    tooWeak.style.display = "flex";
    weak.style.display = "none";
    mediumRecta.style.display = "none";
    rectaStrong.style.display = "none";
  }
  if (countRange == 2) {
    rectaNoColor.style.display = "none";
    tooWeak.style.display = "none";
    weak.style.display = "flex";
    mediumRecta.style.display = "none";
    rectaStrong.style.display = "none";
  }
  if (countRange == 3) {
    rectaNoColor.style.display = "none";
    tooWeak.style.display = "none";
    weak.style.display = "none";
    mediumRecta.style.display = "flex";
    rectaStrong.style.display = "none";
  }
  if (countRange == 4) {
    rectaNoColor.style.display = "none";
    tooWeak.style.display = "none";
    weak.style.display = "none";
    mediumRecta.style.display = "none";
    rectaStrong.style.display = "flex";
  }
  copied.style.display = "none";
}

function hover() {
  arrowBtn.style.filter =
    "invert(91%) sepia(12%) saturate(1240%) hue-rotate(65deg)  brightness(160%) contrast(106%)";
}

function blackHover() {
  arrowBtn.style.filter =
    "invert(11%) sepia(18%) saturate(614%) hue-rotate(207deg) brightness(92%) contrast(91%)";
}
