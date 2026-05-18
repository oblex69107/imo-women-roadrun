
/* =========================
   COUNTDOWN TIMER
========================= */

const eventDate = new Date("June 20, 2026 07:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    const timerBox = document.querySelector(".timer");
    if (timerBox) timerBox.innerHTML = "<h3>Event Started 🎉</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  if (d && h && m && s) {
    d.innerText = days;
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
  }

}, 1000);


/* =========================
   REGISTRATION FORM
========================= */

const form = document.getElementById("regForm");
const button = form ? form.querySelector("button") : null;

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzN6x6_s1vEKRr7nnOIs0D1bmrxgsEkvZ7mdoYiJAmNhgQ7pVcCqHDk3B1Y-XonFHeDIA/exec";

function showMessage(msg, isError = false) {
  const popup = document.createElement("div");

  popup.innerText = msg;

  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "10px";
  popup.style.color = "white";
  popup.style.fontWeight = "500";
  popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  popup.style.background = isError ? "#e74c3c" : "#2ecc71";
  popup.style.zIndex = "9999";

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 3000);
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const data = {
      name: inputs[0].value.trim(),
      email: inputs[1].value.trim(),
      phone: inputs[2].value.trim(),
      age: inputs[3].value.trim()
    };

    /* =========================
       BASIC VALIDATION
    ========================= */

    if (!data.name || !data.email || !data.phone || !data.age) {
      showMessage("Please fill all fields", true);
      return;
    }

    if (!data.email.includes("@")) {
      showMessage("Enter a valid email", true);
      return;
    }

    if (data.phone.length < 10) {
      showMessage("Enter a valid phone number", true);
      return;
    }

    if (data.age < 10 || data.age > 100) {
      showMessage("Enter a valid age", true);
      return;
    }

    /* =========================
       LOADING STATE
    ========================= */

    if (button) {
      button.disabled = true;
      button.innerText = "Submitting...";
    }

    /* =========================
       SEND TO GOOGLE SHEETS
    ========================= */

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
      });

      showMessage("Registration successful 🎉");
      form.reset();

    } catch (error) {
      showMessage("Submission failed. Try again.", true);
    }

    /* RESET BUTTON */
    if (button) {
      button.disabled = false;
      button.innerText = "Submit";
    }
  });
}