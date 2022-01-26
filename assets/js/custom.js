// BACK TO TOP BUTTON
var mybutton = document.getElementById("up_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(function () {

    // STICKY HEADER
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $(".navigation").addClass('sticky-nav')
        }
        else {
            $(".navigation").removeClass('sticky-nav');
        }
    })

    //Simple Lightbox Enable
    $('.gallery a').simpleLightbox();

    //Video LightBox Enable
    $('#vidBox').VideoPopUp({
        // trigger element
            opener:"trigger",
            idvideo:"intro-video"
        
        });
})



