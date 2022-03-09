// *** script for page dropdown menu ***//

var dpMenu = document.getElementById("page-drop-menu");

function dropMenu() {
    dpMenu.classList.toggle("show");
}

function noneDrop() {
    dpMenu.classList.toggle("show");
}

// *** script for toggle menu button in max width 992 ***//

var responsMenu = document.getElementById("respons-menu");

document.getElementById("toggle-menu-btn").addEventListener("click", showMenu);

function showMenu() {
    responsMenu.classList.toggle("responsive-menu");
}

// *** slider scripts ***//

var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

// ** change slides auto **//

var slideIndex = 0;
var slides = [slider1, slider2, slider3];
showSlides();

function showSlides() {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

// **** change slide whith arrow button ****// 

// *** next slide function ***//
var slideNo = 0;

function goNextSlide() {

    if (slideNo != 2) {
        slideNo++;
    } else {
        slideNo = 0;
    }

    if (slideNo == 0) {
        slider1.style.display = "block";
        slider2.style.display = "none";
        slider3.style.display = "none";
    } else {
        if (slideNo == 1) {
            slider2.style.display = "block";
            slider1.style.display = "none";
            slider3.style.display = "none";
        } else {
            if (slideNo == 2) {
                slider3.style.display = "block";
                slider1.style.display = "none";
                slider2.style.display = "none";
            }
        }
    }
}
// *** prev slides ***//


function goPrevSlide() {

    if (slideNo != 0) {
        slideNo--;
    } else {
        slideNo = 2;
    }

    if (slideNo == 0) {
        slider1.style.display = "block";
        slider2.style.display = "none";
        slider3.style.display = "none";
    } else {
        if (slideNo == 1) {
            slider2.style.display = "block";
            slider1.style.display = "none";
            slider3.style.display = "none";
        } else {
            if (slideNo == 2) {
                slider3.style.display = "block";
                slider1.style.display = "none";
                slider2.style.display = "none";
            }
        }
    }
}

//**  facts numbers scripts**//

// function setFactNumber1() {
//     var SP = 0;
//     var i;
//     for (i = 0; i < 25; i++) {
//         SP++;
//     }
//     document.getElementById("service-points-txt").innerHTML = SP;

// }

// function time() {
//     setInterval(setFactNumber1, 2000);
// }

// time();


//** script for clients opinion **/

// document.getElementById("circle-btn-1").addEventListener("click", Cbtn1);
// document.getElementById("circle-btn-2").addEventListener("click", Cbtn2);
// document.getElementById("circle-btn-3").addEventListener("click", Cbtn3);
// document.getElementById("circle-btn-4").addEventListener("click", Cbtn4);
// const idea1 = document.getElementById("idea-item1");
// const idea2 = document.getElementById("idea-item2");
// const idea3 = document.getElementById("idea-item3");
// const idea4 = document.getElementById("idea-item4");

// const ideas = [document.getElementById("idea-item1"), document.getElementById("idea-item2"), document.getElementById("idea-item3"), document.getElementById("idea-item4")];

// function Cbtn1() {
//     // idea4.classList.addClassName("d-none");
//     // idea1.classList.add("d-block");
//     // idea2.classList.add("d-block");
//     // idea3.classList.add("d-block");
//     console.log(1);

//     for (var i = 0; i < ideas.length; i++) {
//         ideas[i].classList.add("d-block");
//         ideas[4].classList.add("d-none");
//     }
// }

// function Cbtn2() {
//     // idea1.classList.add("d-none");
//     // idea2.classList.add("d-block");
//     // idea3.classList.add("d-block");
//     // idea4.classList.add("d-block");
//     console.log(2);
//     for (var i = 0; i < ideas.length; i++) {
//         ideas[i].classList.add("d-block");
//         ideas[1].classList.add("d-none");
//     }
// }

// function Cbtn3() {
//     // idea2.classList.add("d-none");
//     // idea1.classList.add("d-block");
//     // idea3.classList.add("d-block");
//     // idea4.classList.add("d-block");
//     console.log(3);
//     for (var i = 0; i < ideas.length; i++) {
//         ideas[i].classList.add("d-block");
//         ideas[2].classList.add("d-none");
//     }
// }

// function Cbtn4() {
//     // idea3.classList.add("d-none");
//     // idea1.classList.add("d-block");
//     // idea2.classList.add("d-block");
//     // idea4.classList.add("d-block");
//     console.log(4);
//     for (var i = 0; i < ideas.length; i++) {
//         ideas[i].classList.add("d-block");
//         ideas[3].classList.add("d-none");
//     }
// }


// animate javascript code

var logo = document.querySelector(".header-nav-title");
logo.addEventListener("mouseover", function() {
    logo.classList.add("animate__animated", "animate__pulse");

    setTimeout(function() {
        logo.classList.remove("animate__animated", "animate__pulse");
    }, 1000);
});

// document.querySelector(".team-item").addEventListener("mouseover", function() {
//     document.querySelector(".t-img").classList.add("animate__animated", "animate__fadeIn");
//     setTimeout(function() {
//         document.querySelector(".t-img").classList.remove("animate__animated", "animate__fadeIn");

//     }, 1000)
//     console.log(0);
// });