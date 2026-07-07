// =====================================================
// ELEMENTS
// =====================================================

const intro = document.getElementById("intro");
const beginBtn = document.getElementById("beginBtn");

const mainContent = document.getElementById("mainContent");

const envelope = document.getElementById("envelope");
const envelopeSection = document.getElementById("envelopeSection");

const letterSection = document.getElementById("letterSection");

const pages = document.querySelectorAll(".page");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

const music = document.getElementById("bgMusic");

// =====================================================
// INITIAL STATE
// =====================================================

mainContent.style.display = "none";
letterSection.style.display = "none";

let currentPage = 0;

// =====================================================
// BEGIN BUTTON
// =====================================================

beginBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.style.display = "block";

        if (music) {

            music.volume = 0.35;

            music.play().catch(() => {});

        }

    }, 1200);

});

// =====================================================
// ENVELOPE
// =====================================================

envelope.addEventListener("click", () => {

    createSparkles();

    envelope.animate(

        [

            {
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            },

            {
                transform: "scale(1.12) rotate(-5deg)",
                opacity: 1
            },

            {
                transform: "scale(1.45) rotate(10deg)",
                opacity: 0
            }

        ],

        {

            duration: 1200,

            easing: "ease-in-out",

            fill: "forwards"

        }

    );

    setTimeout(() => {

        envelopeSection.style.display = "none";

        letterSection.style.display = "flex";

        showPage(0);

    }, 1200);

});

// =====================================================
// PAGE SYSTEM
// =====================================================

function showPage(index) {

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    pageIndicator.textContent =
        `${index + 1} / ${pages.length}`;

    prevBtn.disabled = index === 0;

    if (index === pages.length - 1) {

        nextBtn.textContent = "Finish ❤️";

    } else {

        nextBtn.textContent = "Next ▶";

    }

}

nextBtn.addEventListener("click", () => {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    } else {

        finishStory();

    }

});

prevBtn.addEventListener("click", () => {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

});

// =====================================================
// FINISH
// =====================================================

function finishStory() {

    document.body.animate(

        [

            { opacity: 1 },

            { opacity: 0 }

        ],

        {

            duration: 5000,

            fill: "forwards"

        }

    );

    if (music) {

        const fade = setInterval(() => {

            if (music.volume > 0.02) {

                music.volume -= 0.02;

            } else {

                music.pause();

                clearInterval(fade);

            }

        }, 150);

    }

}

// =====================================================
// SPARKLES
// =====================================================

function createSparkles() {

    const rect = envelope.getBoundingClientRect();

    for (let i = 0; i < 40; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            rect.left + rect.width / 2 + "px";

        sparkle.style.top =
            rect.top + rect.height / 2 + "px";

        sparkle.style.setProperty(
            "--x",
            (Math.random() - 0.5) * 450 + "px"
        );

        sparkle.style.setProperty(
            "--y",
            (Math.random() - 0.5) * 450 + "px"
        );

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 1500);

    }

}

// =====================================================
// SHOOTING STARS
// =====================================================

setInterval(() => {

    const star = document.createElement("div");

    star.style.position = "fixed";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top = "-100px";

    star.style.width = "2px";

    star.style.height = "130px";

    star.style.background =
        "linear-gradient(white,transparent)";

    star.style.transform = "rotate(45deg)";

    star.style.opacity = ".8";

    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.transition = "3s linear";

        star.style.transform =
            "translate(700px,700px) rotate(45deg)";

        star.style.opacity = "0";

    }, 30);

    setTimeout(() => {

        star.remove();

    }, 3300);

}, 5000);
// ==========================
// SIGNATURE ANIMATION
// ==========================

const signature = document.getElementById("signatureName");

function startSignature() {

    if(signature){

        signature.classList.add("write");

    }

}