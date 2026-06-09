// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.innerHTML =
                '<i class="fas fa-sun"></i>';
        } else {
            themeBtn.innerHTML =
                '<i class="fas fa-moon"></i>';
        }

    });
}

// =========================
// TYPING ANIMATION
// =========================

const typingText =
    "DATA SCIENCE • AI • MACHINE LEARNING ENGINEER";

const typingElement =
    document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (typingElement && i < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(i);

        i++;

        setTimeout(typeWriter, 60);
    }
}

if (typingElement) {
    typingElement.textContent = "";
    typeWriter();
}

// =========================
// SMOOTH SCROLL
// =========================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", e => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// =========================
// REVEAL ANIMATION
// =========================

const hiddenElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .edu-card, .certificate-card"
    );

hiddenElements.forEach(el => {
    el.classList.add("hidden");
});

function reveal() {

    hiddenElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn =
    document.createElement("button");

topBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00e5ff;
color:#000;
font-size:18px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px #00e5ff;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

alert(
`${window.location.hostname} says

Thank you, ${name}!

Your message has been sent successfully.

We will contact you at ${email} soon.`
);

});