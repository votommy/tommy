$(document).ready(function() { //jQuery
    $("#downAngle").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });

    $("#downAngle, #hamburger, .navAboutMe, .navExperience, .navAwards, .navContact, #NW, #FP, #fed, #verizon").mouseover(function() { //toggle between cursor and pointer on hover
        $(this).css('cursor', 'pointer');
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
    $(".navContact").click(function() { //scrolls to Contact on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    
    $("#NW").click(function() { //Show description on click
        $("#NW p").slideToggle();
        $("#downAngle1").toggleClass('flipped'); //Toggle between down and up arrow
    });
    $("#FP").click(function() {
        $("#FP p").slideToggle();
        $("#downAngle2").toggleClass('flipped');
    });
    $("#fed").click(function() {
        $("#fed p").slideToggle();
        $("#downAngle3").toggleClass('flipped');
    });
    $("#verizon").click(function() {
        $("#verizon p").slideToggle();
        $("#downAngle4").toggleClass('flipped');
    });
    
    $(".dropdown").click(function() {
        $(".navList").toggle(); //Toggle visibility of dropdown menu in mobile
        $("#hamburger").toggleClass('x'); //Toggle between hamburger and X
    });
}); //End jQuery

//Javascript ---------------------------------------------------
// Execute scrollFunction on scroll 
window.onscroll = function() {
    scrollFunction();
};

var navbar = document.getElementById("navbar");
var topOffset = navbar.offsetTop;
// Toggle sticky navbar when the scroll position is reached.
function scrollFunction() {
    if (window.pageYOffset >= topOffset) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

var year = new Date().getFullYear(); //Automatically update copyright year
document.getElementById("copyrightDate").innerHTML = "&copy;" + year + " Developed by Tommy Vo | All rights reserved";