$(document).ready(function() {
    $("#downAngle").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });

    $("#downAngle, #navAboutMe, #navProjects, #navContact, #navHamburger").mouseover(function() { //changes mouse pointer to hand when hovered over button
        $(this).css('cursor', 'pointer');
    });
    
    $("#navAboutMe").click(function() { //scrolls to About Me on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 900);
    });
    $("#navProjects").click(function() { //scrolls to Projects on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
            }, 900);
    });
    $("#navContact").click(function() { //scrolls to Contact on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    
    $(".dropdown").click(function() { //Toggle visibility of dropdown menu in mobile
        $(".navList").toggle();
    });
    
});