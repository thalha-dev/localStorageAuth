const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPass = document.getElementById("signup-pass");
const signupConfirmPass = document.getElementById("signup-confirmPass");
const token = localStorage.getItem("token");
const signupButton = document.getElementById("signup-btn");
const mandatoryMsg = document.getElementById("mandatory");
const signupSuccessMsg = document.getElementById("signup-success");

function generateRandomString() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
  return randomString;
}

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

function navigateToProfilePage() {
  window.location.href = "../profile.html";
}

if (token) {
  navigateToProfilePage();
} else {
  signupButton.addEventListener("click", async () => {
    if (
      !signupName.value ||
      !signupPass.value ||
      !signupConfirmPass.value ||
      !signupEmail.value ||
      signupPass.value !== signupConfirmPass.value
    ) {
      mandatoryMsg.style.display = "block";
    } else {
      mandatoryMsg.style.display = "none";
      signupSuccessMsg.style.display = "block";

      localStorage.setItem("name", signupName.value);
      localStorage.setItem("email", signupEmail.value);
      localStorage.setItem("password", signupPass.value);
      localStorage.setItem("token", generateRandomString());
      await delay(1000);
      navigateToProfilePage();
    }
  });
}
