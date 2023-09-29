const left = document.querySelector(".left");
const h3_signin = document.querySelector(".h3-signin");
const h3_signup = document.querySelector(".h3-signup");
const text_sign_up = document.querySelector(".text-sign-up");
const sign_up_form = document.querySelector(".sign-up-form");
const email_input = document.querySelector(".email-input");
const email_label = document.querySelector(".email-label");
const first_icon = document.getElementById("ficon"),
    second_icon = document.getElementById("sicon"),
    first_inp = document.querySelector(".pass1"),
    second_inp = document.querySelector(".pass2");

email_input.onkeyup = () => {
    if (email_input.value !== '') {
        email_label.style = "display: none";
    } else {
        email_label.style = "display: inline";
    }
}

const showPasswordFunc = (icon, inp) => {
    const inpType = inp.getAttribute("type");
    const iconC = icon.className;
    if (inpType === "password") {
        inp.setAttribute("type", "text");
    } else {
        inp.setAttribute("type", "password")
    };
    if (iconC) {
        icon.classList.toggle("fa-eye");
    }
}


first_icon.addEventListener('click', () => showPasswordFunc(first_icon, first_inp))
second_icon.addEventListener('click', () => showPasswordFunc(second_icon, second_inp))


if (window.innerWidth > 600) {
    gsap.to(".text-sign-in", { duration: 1, ease: "bounce", y: "-270%", opacity: 1 })

    h3_signin.addEventListener('click', () => {
        gsap.to(".left", { duration: 1, x: "100%" })
        gsap.to(".text-sign-in", { duration: 1, x: "100%", opacity: 0 })
        gsap.to(".text-sign-up", { duration: 1, x: "0%", opacity: 1 })
        gsap.to(".sign-in-form", { duration: 1, opacity: 0 })
        gsap.to(".sign-up-form", { duration: 1, opacity: 1, delay: 1 })
        left.style = "border-radius: 0 10px 10px 0";
    });


    h3_signup.addEventListener('click', () => {
        gsap.to(".left", { duration: 1, x: "0%" })
        gsap.to(".text-sign-in", { duration: 1, x: "0%", opacity: 1 })
        gsap.to(".text-sign-up", { duration: 1, x: "-100%", opacity: 0 })
        gsap.to(".sign-in-form", { duration: 1, opacity: 1, delay: 1 })
        gsap.to(".sign-up-form", { duration: 1, opacity: 0 })
        left.style = "border-radius: 10px 0 0 10px";
    })
} else {
    gsap.to(".text-sign-in", { duration: 1, ease: "bounce", y: "-50%", opacity: 1 })
    h3_signin.addEventListener('click', () => {
        gsap.to(".left", { duration: 1, y: "400%" })
        gsap.to(".text-sign-in", { duration: 1, y: "-150%", opacity: 0 })
        gsap.to(".text-sign-up", { duration: 1, y: "-100%", opacity: 1 })
        gsap.to(".sign-in-form", { duration: 1, opacity: 0 })
        gsap.to(".sign-up-form", { duration: 1, opacity: 1, delay: .8 });
        sign_up_form.style = "visibility: visible"
        text_sign_up.style = "visibility: visible"
        left.style = "border-radius: 0 0 10px 10px";
    });


    h3_signup.addEventListener('click', () => {
        gsap.to(".left", { duration: 1, y: "0%" })
        gsap.to(".text-sign-in", { duration: 1, y: "-50%", opacity: 1 })
        gsap.to(".text-sign-up", { duration: 1, y: "100%", opacity: 0 })
        gsap.to(".sign-in-form", { duration: 1, opacity: 1, delay: .8 })
        gsap.to(".sign-up-form", { duration: 1, opacity: 0 });
        setTimeout(() => {
            sign_up_form.style = "visibility: hidden"
        }, 1000)
        text_sign_up.style = "visibility: hidden"
        left.style = "border-radius: 10px 10px 0 0";
    })
}