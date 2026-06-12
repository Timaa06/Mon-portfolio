
/* TYPING EFFECT */

const texts = [
    "Frontend Developer",
    "Fullstack Developer",
    "UI Designer",
    "Web Developer"
];

const typingText = document.querySelector(".typing-text");

let index = 0;
let charIndex = 0;

function type(){

    if(charIndex < texts[index].length){

        typingText.textContent += texts[index].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }
}

function erase(){

    if(charIndex > 0){

        typingText.textContent =
        texts[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        index++;

        if(index >= texts.length){
            index = 0;
        }

        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if(texts.length){
        setTimeout(type, 1000);
    }

});


/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.pageX + "px";

    glow.style.top = e.pageY + "px";

});


/* FLOATING IMAGE */

const image = document.querySelector(".hero-image img");

let floating = 0;

setInterval(() => {

    floating += 0.05;

    image.style.transform =
    `translateY(${Math.sin(floating) * 10}px)`;

}, 30);

