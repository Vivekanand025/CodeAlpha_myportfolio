// ==========================
// HIRE ME BUTTON
// ==========================

document
.getElementById("hireBtn")
.addEventListener("click", () => {

    alert(
        "Thank you for visiting my portfolio!"
    );

});

// ==========================
// CONTACT FORM
// ==========================

document
.getElementById("feedbackForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Message Sent Successfully!"
    );

    this.reset();

});

// ==========================
// TYPING ANIMATION
// ==========================

const textArray = [

    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner",
    "PHP Developer",
    "Computer Science Student"

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeText(){

    if(charIndex <
    textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(deleteText,1500);

    }

}

function deleteText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex]
        .substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteText,50);

    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){

            textIndex = 0;

        }

        setTimeout(typeText,300);

    }

}

typeText();

// ==========================
// SCROLL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
".card, .project, .special-box div, .about-box"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
"nav ul li a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});

// ==========================
// SMOOTH PAGE LOADER
// ==========================

window.addEventListener(
"load",
() => {

    document.body.style.opacity = "1";

});