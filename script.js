/* ========================================= */
/* COUNTDOWN TIMER */
/* ========================================= */

const eventDate =
new Date(
    "December 19, 2026 00:00:00"
).getTime();


const daysElement =
document.getElementById("days");

const hoursElement =
document.getElementById("hours");

const minutesElement =
document.getElementById("minutes");

const secondsElement =
document.getElementById("seconds");


if(
    daysElement &&
    hoursElement &&
    minutesElement &&
    secondsElement
){

    const countdown =
    setInterval(()=>{

        const now =
        new Date().getTime();

        const distance =
        eventDate - now;


        if(distance <= 0){

            clearInterval(
                countdown
            );

            daysElement.innerHTML = "00";
            hoursElement.innerHTML = "00";
            minutesElement.innerHTML = "00";
            secondsElement.innerHTML = "00";

            return;

        }


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


        daysElement.innerHTML =
        String(days).padStart(2, "0");


        hoursElement.innerHTML =
        String(hours).padStart(2, "0");


        minutesElement.innerHTML =
        String(minutes).padStart(2, "0");


        secondsElement.innerHTML =
        String(seconds).padStart(2, "0");


    },1000);

}



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


        if(!navbar){

            return;

        }


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


if(
    fadeElements.length > 0 &&
    "IntersectionObserver" in window
){

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

                        observer.unobserve(
                            entry.target
                        );

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

}