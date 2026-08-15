/* =====================================================
   VAISHALI & SAIKRISHNA
   WEDDING WEBSITE JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. LOADING SCREEN
   ===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hidden");

    }, 900);

});


/* =====================================================
   2. MOBILE MENU
   ===================================================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });


    // Close menu after clicking a link

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

        });

    });

}


/* =====================================================
   3. WEDDING MUSIC
   ===================================================== */

const musicButton =
    document.getElementById("musicButton");

const weddingMusic =
    document.getElementById("weddingMusic");


let musicPlaying = false;


if (musicButton && weddingMusic) {

    musicButton.addEventListener("click", function () {

        if (musicPlaying) {

            weddingMusic.pause();

            musicPlaying = false;

            musicButton.classList.remove("playing");

            musicButton.querySelector(".music-text").textContent =
                "Music";

        } else {

            weddingMusic.play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.classList.add("playing");

                    musicButton.querySelector(".music-text").textContent =
                        "Pause";

                })
                .catch(function () {

                    alert(
                        "Please tap the Music button again to start the wedding music."
                    );

                });

        }

    });

}


/* =====================================================
   4. COUNTDOWN TIMER
   ===================================================== */


/*
   ✏️ EDIT HERE

   Wedding date:
   23 August 2026

   If you want a specific wedding time later,
   change the time below.

   Example:

   "August 23, 2026 10:30:00"
*/


const weddingDate =
    new Date("August 23, 2026 10:30:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (distance > 0) {

        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    } else {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

    }

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   5. RSVP FORM
   ===================================================== */

const rsvpForm =
    document.getElementById("rsvpForm");


if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const guestName =
                document.getElementById("guestName").value;

            const attendance =
                document.getElementById("attendance").value;

            const guests =
                document.getElementById("guests").value;


            if (!guestName || !attendance) {

                alert(
                    "Please fill in your name and attendance."
                );

                return;

            }


            let message = "";


            if (attendance === "yes") {

                message =
                    "Thank you, " +
                    guestName +
                    "! ❤️\n\n" +
                    "We are delighted that you will be joining us.\n" +
                    "Number of guests: " +
                    guests;

            } else {

                message =
                    "Thank you, " +
                    guestName +
                    ", for letting us know.\n\n" +
                    "You will be missed! ❤️";

            }


            alert(message);


            rsvpForm.reset();

        }
    );

}


/* =====================================================
   6. SCROLL REVEAL ANIMATIONS
   ===================================================== */

const elementsToReveal =
    document.querySelectorAll(
        ".section-heading, " +
        ".story-grid, " +
        ".event-card, " +
        ".gallery-item, " +
        ".video-wrapper, " +
        ".venue-card, " +
        ".rsvp-form"
    );


elementsToReveal.forEach(function (element) {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementsToReveal.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================================
   7. GALLERY IMAGE CLICK
   ===================================================== */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


galleryImages.forEach(function (image) {

    image.style.cursor = "zoom-in";


    image.addEventListener(
        "click",
        function () {

            const imageWindow =
                window.open("");

            if (imageWindow) {

                imageWindow.document.write(`
                    <html>
                        <head>
                            <title>Wedding Photo</title>

                            <style>
                                body {
                                    margin: 0;
                                    background: #16090b;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    min-height: 100vh;
                                }

                                img {
                                    max-width: 95%;
                                    max-height: 95vh;
                                    object-fit: contain;
                                }
                            </style>
                        </head>

                        <body>
                            <img src="${image.src}">
                        </body>
                    </html>
                `);

            }

        }
    );

});


/* =====================================================
   8. SMOOTH SCROLL
   ===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (targetId === "#") {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =====================================================
   END
   ===================================================== */