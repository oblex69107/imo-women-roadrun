const reviewContent =
document.getElementById(
    "reviewContent"
);

const data =
JSON.parse(
    localStorage.getItem(
        "registrationData"
    )
);

let html = "";

for(const key in data){

    html += `

    <div class="review-item">

        <span class="label">

            ${formatLabel(key)}

        </span>

        <span class="value">

            ${data[key] || "-"}

        </span>

    </div>

    `;

}

reviewContent.innerHTML =
html;

function formatLabel(key){

    return key

    .replace(
      /([A-Z])/g,
      " $1"
    )

    .replace(
      /^./,
      str => str.toUpperCase()
    );

}

function goBack(){

    history.back();

}
async function confirmSubmission(){

    const data =
    JSON.parse(
        localStorage.getItem(
            "registrationData"
        )
    );

    const scriptURL =
    "https://script.google.com/macros/s/AKfycbwp1DZ3K33dUROnr85mHD5-9E2TUGP5pHp9JbJcHbLWm1_tYCDqzS2Qu29_qU_0uluE/exec";

    try{
        const formData = new FormData();

for(const key in data){

    formData.append(
        key,
        data[key]
    );

}

const response =
await fetch(scriptURL, {

    method:"POST",

    body:formData

});

console.log("Submitted");

window.location.href =
"success.html";

    }

    catch(error){

        console.error(error);

        alert(
          "Network error."
        );

    }

}