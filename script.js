/* ========================================= */
/* QUICK FORM TO GOOGLE SHEET */
/* ========================================= */

/*
=============================================

IMPORTANT

Replace this URL below with your
Google Apps Script Web App URL

=============================================
*/

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbw2aXyBSAnItuzCajM5FSHLh9qI7XOzSdD_Tvj8vi4KDoer6D_AcXeL0P22ozLBTN4IGA/exec";


/* ========================================= */
/* FORM SUBMISSION */
/* ========================================= */

const quickForm =
document.getElementById("quickForm");


quickForm.addEventListener("submit", async function(e){

  e.preventDefault();

  /* GET INPUT VALUES */

  const fullName =
  quickForm.querySelector('input[type="text"]').value;

  const phone =
  quickForm.querySelector('input[type="tel"]').value;

  const email =
  quickForm.querySelector('input[type="email"]').value;

  const gender =
  quickForm.querySelector('select').value;

  /* BUTTON */

  const submitBtn =
  document.querySelector(".continue-btn");

  submitBtn.innerHTML =
  "Submitting...";

  submitBtn.disabled = true;

  /* FORM DATA */

  const formData = {

    fullName: fullName,

    phone: phone,

    email: email,

    gender: gender,

    date:
    new Date().toLocaleString()

  };

  try{

    /* SEND TO GOOGLE SHEET */

    const response =
    await fetch(GOOGLE_SCRIPT_URL,{

      method:"POST",

      mode:"no-cors",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(formData)

    });

    /* SUCCESS MESSAGE */

    submitBtn.innerHTML =
    "Success ✓";

    /* SMALL DELAY */

    setTimeout(()=>{

      /*
      =======================================
      REDIRECT TO FULL FORM PAGE
      =======================================
      */

      window.location.href =
      "register.html";

    },1200);

  }

  catch(error){

    console.log(error);

    submitBtn.innerHTML =
    "Try Again";

    submitBtn.disabled = false;

    alert(
      "Something went wrong. Please try again."
    );

  }

});


/* ========================================= */
/* COUNTDOWN TIMER */
/* ========================================= */

/*
=============================================

SET EVENT DATE HERE

=============================================
*/

const eventDate =
new Date("August 15, 2026 06:00:00").getTime();


const countdown = setInterval(()=>{

  const now =
  new Date().getTime();

  const distance =
  eventDate - now;

  /* TIME CALCULATIONS */

  const days =
  Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours =
  Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes =
  Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds =
  Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  /* DISPLAY */

  document.getElementById("days").innerHTML =
  days;

  document.getElementById("hours").innerHTML =
  hours;

  document.getElementById("minutes").innerHTML =
  minutes;

  document.getElementById("seconds").innerHTML =
  seconds;

  /* EVENT STARTED */

  if(distance < 0){

    clearInterval(countdown);

    document.getElementById("days").innerHTML =
    "00";

    document.getElementById("hours").innerHTML =
    "00";

    document.getElementById("minutes").innerHTML =
    "00";

    document.getElementById("seconds").innerHTML =
    "00";

  }

},1000);


/* ========================================= */
/* NAVBAR SCROLL EFFECT */
/* ========================================= */

window.addEventListener("scroll",()=>{

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.padding =
    "18px 8%";

    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.08)";

  }

  else{

    navbar.style.padding =
    "22px 8%";

    navbar.style.boxShadow =
    "none";

  }

});


/* ========================================= */
/* SIMPLE FADE-IN ANIMATION */
/* ========================================= */

const fadeElements =
document.querySelectorAll(
  ".stat-card, .faq-box, .sponsor-box, .feature-box"
);


const observer =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0px)";

    }

  });

},{
  threshold:0.2
});


fadeElements.forEach((element)=>{

  element.style.opacity = "0";

  element.style.transform =
  "translateY(40px)";

  element.style.transition =
  "all 0.8s ease";

  observer.observe(element);

});