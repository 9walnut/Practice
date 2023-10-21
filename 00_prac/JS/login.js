const loginForm = document.getElementById("login-form");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "9walnut" && password === "web_dev") {
    alert("로그인 성공");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
