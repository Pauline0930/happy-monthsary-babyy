/* =========================================================
   1ST MONTHSARY WEBSITE
   ========================================================= */


/* ================= GET ELEMENTS ================= */

const screens = {
    home: document.getElementById("home"),
    welcome: document.getElementById("welcome"),
    letter: document.getElementById("letter"),
    journey: document.getElementById("journey"),
    memories: document.getElementById("memories"),
    reasons: document.getElementById("reasons"),
    question: document.getElementById("question"),
    surprise: document.getElementById("surprise")
};

const bgMusic = document.getElementById("bgMusic");

const photoInput = document.getElementById("photoInput");
const gallery = document.getElementById("gallery");


/* ================= SHOW SCREEN ================= */

function showScreen(screenName) {

    Object.values(screens).forEach(screen => {

        if (screen) {
            screen.classList.remove("active");
        }

    });

    if (screens[screenName]) {

        screens[screenName].classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ================= START EXPERIENCE ================= */

function startExperience() {

    showScreen("welcome");

    if (bgMusic) {

        bgMusic.volume = 0.35;

        bgMusic.play().catch(() => {
            console.log("Music requires user interaction.");
        });

    }

}


/* ================= PHOTO UPLOAD ================= */

if (photoInput && gallery) {

    photoInput.addEventListener("change", function () {

        const files = Array.from(this.files);

        files.forEach(file => {

            if (!file.type.startsWith("image/")) {
                return;
            }

            const reader = new FileReader();

            reader.onload = function (event) {

                const photoCard =
                    document.createElement("div");

                photoCard.classList.add("photo-card");

                photoCard.innerHTML = `

                    <img
                        src="${event.target.result}"
                        alt="Our memory"
                    >

                    <div class="photo-caption">

                        <h3>
                            Our Memory 💗
                        </h3>

                        <p>
                            A special moment with you.
                        </p>

                        <button
                            class="remove-photo"
                            onclick="removePhoto(this)"
                        >
                            Remove
                        </button>

                    </div>

                `;

                gallery.appendChild(photoCard);

            };

            reader.readAsDataURL(file);

        });

        this.value = "";

    });

}


/* ================= REMOVE PHOTO ================= */

function removePhoto(button) {

    const photo =
        button.closest(".photo-card");

    if (photo) {

        photo.style.opacity = "0";
        photo.style.transform = "scale(0.8)";

        setTimeout(() => {

            photo.remove();

        }, 300);

    }

}


/* ================= YES BUTTON ================= */

function sayYes() {

    showScreen("surprise");

    createHearts();

}


/* ================= MOVING MAYBE BUTTON ================= */

function moveButton(button) {

    if (!button) {
        return;
    }

    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 180 - 90;

    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* ================= CREATE HEARTS ================= */

function createHearts() {

    const heartsContainer =
        document.querySelector(".floating-hearts");

    if (!heartsContainer) {
        return;
    }

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heartsContainer.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

}


/* ================= INITIAL HEARTS ================= */

function createInitialHearts() {

    const heartsContainer =
        document.querySelector(".floating-hearts");

    if (!heartsContainer) {
        return;
    }

    for (let i = 0; i < 10; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heartsContainer.appendChild(heart);

    }

}


/* ================= PAGE LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createInitialHearts();

    }
);


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            showScreen("home");

        }

    }
);