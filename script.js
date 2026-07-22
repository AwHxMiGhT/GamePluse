const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector(".navbar nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});



const emailButton = document.querySelector(".email-box button");

const emailInput = document.querySelector(".email-box input");


emailButton.addEventListener("click", () => {


    if (emailInput.value.trim() === "") {


        alert("Please enter your email.");

        return;


    }


    alert("Welcome to GAMEPULSE!");


    emailInput.value = "";


});



const exploreButton = document.querySelector(".hero .red-btn");


exploreButton.addEventListener("click", () => {


    document.querySelector("#games").scrollIntoView({

        behavior: "smooth"

    });


});



const cards = document.querySelectorAll(".game-card");


cards.forEach(card => {


    card.addEventListener("click", () => {


        card.style.transform = "scale(.97)";


        setTimeout(() => {


            card.style.transform = "";


        }, 200);


    });


});