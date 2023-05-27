const fullName = localStorage.getItem("name");
const email = localStorage.getItem("email");
const pass = localStorage.getItem("password");
const token = localStorage.getItem("token");
const profileName = document.querySelector(".profile-fullname");
const profileEmail = document.querySelector(".profile-email");
const profilePass = document.querySelector(".profile-password");
const logoutButton = document.getElementById("logout-btn");

function navigateToSignupPage() {
  window.location.href = "/localStorageAuth/index.html";
}
if (!token) {
  navigateToSignupPage();
} else {
  profileName.innerText = fullName;
  profileEmail.innerText = email;
  profilePass.innerText = pass;
}

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("token");
  navigateToSignupPage();
});
