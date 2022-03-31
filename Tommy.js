$(document).ready(function() { //jQuery
    $(".closeUpdateBtn").click(function() {
        $("#updateMsg").css("display", "none");
        $("#updateMsgBackdrop").css("display", "none");
    });
    
    $("#sig").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });
    $(".navAboutMe").click(function() { //scrolls to About Me on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 900);
    });
    $(".navExperience").click(function() { //scrolls to Work Experience on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
            }, 900);
    });
    $(".navAwards").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
            }, 900);
    });
    $(".navProjects").click(function() { //scrolls to Awards on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
            }, 900);
    });
    $(".navContact").click(function() { //scrolls to Contact on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    
    $("#NW1").click(function() { //Show description on click
        $("#NW1 p").slideToggle();
        $("#downAngle0").toggleClass('flipped'); //Toggle between down and up arrow
    });
    $("#NW").click(function() { //Show description on click
        $("#NW p").slideToggle();
        $("#downAngle1").toggleClass('flipped'); //Toggle between down and up arrow
    });
    $("#fed").click(function() {
        $("#fed p").slideToggle();
        $("#downAngle3").toggleClass('flipped');
    });
    $("#verizon").click(function() {
        $("#verizon p").slideToggle();
        $("#downAngle4").toggleClass('flipped');
    });
    $("#evergy").click(function() {
        $("#evergy p").slideToggle();
        $("#downAngle5").toggleClass('flipped');
    });
    
    $(".dropdown").click(function() {
        $(".navList").toggle(); //Toggle visibility of dropdown menu in mobile
        $("#hamburger").toggleClass('x'); //Toggle between hamburger and X
    });
    
    //timing of the slideshow
    $(".carousel").carousel({
        interval: 7000
    });
}); //End jQuery

//Javascript ---------------------------------------------------
// Execute scrollFunction on scroll 
window.onscroll = function() {
    scrollFunction();
};

const navbar = document.getElementById("navbar");
const topOffset = navbar.offsetTop;
// Toggle sticky navbar when the scroll position is reached.
function scrollFunction() {
    if (window.pageYOffset >= topOffset) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

function toggleDarkMode() {
    //Get TommyDark.css
    const darkSheet = document.styleSheets[1];
    
    toggleButton = document.getElementById("toggleButton");
    if(toggleButton.checked == true) {
        darkSheet.disabled = false;
    }
    else {
        darkSheet.disabled = true;
    }
}

function blinkFunction() { //Blinking input cursor in "About Me" section
    const blinkElement = document.getElementsByClassName("blink")[0];
    blinkElement.style.visibility = (blinkElement.style.visibility == 'visible') ? 'hidden' : 'visible';
    window.setTimeout(blinkFunction, 550);
}
blinkFunction();

let year = new Date().getFullYear(); //Automatically update copyright year
document.getElementById("copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo | All rights reserved";