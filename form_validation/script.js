const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInput([userName, userName, password, confirmPassword]);

  // check email
  if (!validateEmail(email.value.trim())) {
    showError(email, "Please enter " + getInputCase(email));
    // เช็คว่าป้อง email ถูกต้องไหม
  } else {
    showSuccess(email);
  }

  checkPassword(password, confirmPassword);
  checkInputLength(userName, 5, 10);
  checkInputLength(password, 5, 12);
});

function showError(input, message) {
  // form
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  // error message tag small
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// เช็คว่ารูปแบบของ email ถูกต้องไหม
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// เช็ค input แต่ละตัวว่ามีการกรอกข้อมูลไหม
function checkInput(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "Please Input " + getInputCase(input));
    } else {
      showSuccess(input);
    }
  });
}

// ให้ error message แสดงตัวอักษรตัวแรกเป็นพิมพ์ใหญ่
function getInputCase(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// ตรวจว่า password กับ confirm password ตรงกันไหม
function checkPassword(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "รหัสผ่านไม่ตรงกัน");
  }
}

function checkInputLength(input, min, max) {
  if (input.value.length <= min) {
    showError(input, "ป้อนชื่อผู้ใช้งานอย่างน้อย " + min + " อักษร");
  } else if (input.value.length > max) {
    showError(input, "ป้อนชื่อผู้ใช้งานได้อย่างมาก " + max + " อักษร");
  } else {
    showSuccess(input);
  }
}
