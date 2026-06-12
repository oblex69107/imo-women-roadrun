/* ========================================= */
/* QUICK FORM TO REGISTER PAGE */
/* ========================================= */

const quickForm =
document.getElementById("quickForm");

if(quickForm){

    quickForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const fullName =
            quickForm.querySelector(
                'input[type="text"]'
            ).value.trim();

            const phone =
            quickForm.querySelector(
                'input[type="tel"]'
            ).value.trim();

            const email =
            quickForm.querySelector(
                'input[type="email"]'
            ).value.trim();

            const gender =
            quickForm.querySelector(
                'select'
            ).value;

            /* Validation */

            if(
                !fullName ||
                !phone ||
                !email ||
                !gender
            ){

                alert(
                    "Please complete all fields before continuing."
                );

                return;

            }

            /* Store Data */

            const starterData = {

                fullName: fullName,

                phone: phone,

                email: email,

                gender: gender

            };

            localStorage.setItem(
                "starterRegistration",
                JSON.stringify(
                    starterData
                )
            );

            /* Instant Redirect */

window.location.href =
"register.html";

        }
    );

}


/* ========================================= */
/* COUNTDOWN TIMER */
/* ========================================= */

const eventDate =
new Date(
    "December 19, 2026 00:00:00"
).getTime();

const countdown =
setInterval(()=>{

    const now =
    new Date().getTime();

    const distance =
    eventDate - now;

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (
            distance %
            (1000 * 60)
        ) /
        1000
    );

    document.getElementById(
        "days"
    ).innerHTML = days;

    document.getElementById(
        "hours"
    ).innerHTML = hours;

    document.getElementById(
        "minutes"
    ).innerHTML = minutes;

    document.getElementById(
        "seconds"
    ).innerHTML = seconds;

    if(distance < 0){

        clearInterval(
            countdown
        );

        document.getElementById(
            "days"
        ).innerHTML = "00";

        document.getElementById(
            "hours"
        ).innerHTML = "00";

        document.getElementById(
            "minutes"
        ).innerHTML = "00";

        document.getElementById(
            "seconds"
        ).innerHTML = "00";

    }

},1000);


/* ========================================= */
/* NAVBAR SCROLL EFFECT */
/* ========================================= */

window.addEventListener(
    "scroll",
    ()=>{

        const navbar =
        document.querySelector(
            ".navbar"
        );

        if(
            window.scrollY > 50
        ){

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

    }
);


/* ========================================= */
/* FADE IN ANIMATION */
/* ========================================= */

const fadeElements =
document.querySelectorAll(

    ".stat-card, .faq-box, .sponsor-box, .feature-box"

);

const observer =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(
            (entry)=>{

                if(
                    entry.isIntersecting
                ){

                    entry.target.style.opacity =
                    "1";

                    entry.target.style.transform =
                    "translateY(0px)";

                }

            }
        );

    },

    {

        threshold:0.2

    }

);

fadeElements.forEach(

    (element)=>{

        element.style.opacity =
        "0";

        element.style.transform =
        "translateY(40px)";

        element.style.transition =
        "all 0.8s ease";

        observer.observe(
            element
        );

    }

);