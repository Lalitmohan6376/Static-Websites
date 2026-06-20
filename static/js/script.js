const darkModeBtn = document.querySelector("#darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

/* MENU TOGGLE */
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* FAQ */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

/* COUNTER ANIMATION */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));
        const current = Number(counter.innerText);

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

/* FILTER WORKOUT */
const filterButtons = document.querySelectorAll(".filter-btn");
const workoutItems = document.querySelectorAll(".workout-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        workoutItems.forEach((item) => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {

        const name = document.querySelector("#full_name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !phone || !message) {
            event.preventDefault();
            alert("Please fill all fields.");
            return;
        }

        event.preventDefault();

        const successImg = document.querySelector("#successImage");

        if (successImg) {
            successImg.style.display = "block";

            setTimeout(() => {
                successImg.style.opacity = "1";
            }, 50);
        }

        contactForm.reset();
    });
    successImg.style.display = "block";
    successImg.style.opacity = "1";
}
/* BMI CALCULATOR */
const bmiButton = document.querySelector("#calculateBMI");

if (bmiButton) {
    bmiButton.addEventListener("click", () => {
        const height =
            parseFloat(document.querySelector("#height").value) / 100;

        const weight =
            parseFloat(document.querySelector("#weight").value);

        const result = document.querySelector("#bmiResult");

        if (!height || !weight) {
            result.innerHTML = "Enter valid values";
            return;
        }

        const bmi = weight / (height * height);

        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal Weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        result.innerHTML =
            "BMI: " +
            bmi.toFixed(1) +
            " | Category: " +
            category;
    });
}