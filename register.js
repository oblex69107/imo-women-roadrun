const scriptURL =
"https://script.google.com/macros/s/AKfycbwSFHLva4C92wKJg9Tcc6JEbiTUbxjPlHanC9l8dVgrxuvy4Vugnv42BJ1BKprz3BR4/exec";

const form =
document.getElementById(
  "registrationForm"
);

form.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    const formData =
    new FormData(form);

    const data =
    Object.fromEntries(
      formData.entries()
    );

    data.volunteer =
      document.getElementById("volunteer")?.checked
      ? "Yes"
      : "No";

    data.futureEvents =
      document.getElementById("futureEvents")?.checked
      ? "Yes"
      : "No";

    localStorage.setItem(
      "registrationData",
      JSON.stringify(data)
    );

    window.location.href =
    "review.html";

});
/* MEDICAL CONDITION */

document
.getElementById("medicalCondition")
.addEventListener("change", function(){

  document
  .getElementById("medicalConditionDetails")
  .style.display =
  this.value === "Yes"
  ? "flex"
  : "none";

});

document
.getElementById("conditionType")
.addEventListener("change", function(){

  document
  .getElementById("otherConditionBox")
  .style.display =
  this.value === "Others"
  ? "flex"
  : "none";

});

/* ALLERGIES */

document
.getElementById("allergyStatus")
.addEventListener("change", function(){

  document
  .getElementById("allergyDetails")
  .style.display =
  this.value === "Yes"
  ? "flex"
  : "none";

});

/* MEDICATION */

document
.getElementById("medicationStatus")
.addEventListener("change", function(){

  document
  .getElementById("medicationDetails")
  .style.display =
  this.value === "Yes"
  ? "flex"
  : "none";

});

/* LIMITATIONS */

document
.getElementById("limitationStatus")
.addEventListener("change", function(){

  document
  .getElementById("limitationDetails")
  .style.display =
  this.value === "Yes"
  ? "flex"
  : "none";

});