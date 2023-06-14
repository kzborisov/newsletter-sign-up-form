const email = document.querySelector(".email");
const btn = document.getElementById("submit-btn");
const mainForm = document.querySelector(".container");
const successModal = document.querySelector(".success");
const dissmisBtn = document.querySelector(".dismiss-btn");
const successEmail = document.querySelector(".success-email");

const validateEmail = (email) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const span = document.querySelectorAll(".valid-email")[0];

  if (!validateEmail(email.value)) {
    span.style.display = "block";
    email.classList.add("error");
  } else {
    email.classList.remove("error");
    span.style.display = "none";
    mainForm.style.display = "none";
    successModal.style.display = "flex";
    successEmail.textContent = email.value;
    email.value = "";
  }
});

dissmisBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainForm.style.display = "flex";
  successModal.style.display = "none";
});
