const scriptURL =
"https://script.google.com/macros/s/AKfycbwSFHLva4C92wKJg9Tcc6JEbiTUbxjPlHanC9l8dVgrxuvy4Vugnv42BJ1BKprz3BR4/exec";

const form =
document.getElementById(
  "registrationForm"
);

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const submitBtn =
    document.querySelector(
      ".submit-btn"
    );

    submitBtn.innerHTML =
    "Submitting...";

    submitBtn.disabled = true;

    const formData =
    new FormData(form);

    const data = {

      fullName:
      formData.get("fullName"),

      gender:
      formData.get("gender"),

      dob:
      formData.get("dob"),

      age:
      formData.get("age"),

      nationality:
      formData.get("nationality"),

      occupation:
      formData.get("occupation"),

      state:
      formData.get("state"),

      lga:
      formData.get("lga"),

      phone:
      formData.get("phone"),

      whatsapp:
      formData.get("whatsapp"),

      email:
      formData.get("email"),

      address:
      formData.get("address"),

      emergencyName:
      formData.get("emergencyName"),

      relationship:
      formData.get("relationship"),

      emergencyPhone:
      formData.get("emergencyPhone"),

      alternatePhone:
      formData.get("alternatePhone"),

      emergencyState:
      formData.get("emergencyState"),

      emergencyAddress:
      formData.get("emergencyAddress"),

      raceCategory:
      formData.get("raceCategory"),

      participationType:
      formData.get("participationType"),

      experience:
      formData.get("experience"),

      shirtSize:
      formData.get("shirtSize"),

      fit:
      formData.get("fit"),

      medical:
      formData.get("medical"),

      allergies:
      formData.get("allergies"),

      medications:
      formData.get("medications"),

      limitations:
      formData.get("limitations"),

      paymentName:
      formData.get("paymentName"),

      paymentReference:
      formData.get("paymentReference"),

      eventSource:
      formData.get("eventSource"),

      volunteer:
      document.getElementById(
        "volunteer"
      ).checked
      ? "Yes"
      : "No",

      futureEvents:
      document.getElementById(
        "futureEvents"
      ).checked
      ? "Yes"
      : "No"

    };

    try {

      const response =
      await fetch(scriptURL, {

        method: "POST",

        body:
        JSON.stringify(data)

      });

      const result =
      await response.json();

      if(result.result === "success"){

        alert(
          "Registration submitted successfully!"
        );

        form.reset();

      }

    } catch(error){

      alert(
        "Something went wrong."
      );

      console.error(error);

    }

    submitBtn.innerHTML =
    "Complete Registration";

    submitBtn.disabled = false;

});