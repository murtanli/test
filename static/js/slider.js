$(document).ready(function() {
    let slides = $(".slider > div");
    let currentIndex = 1;
    let slideInterval = 5000;

    function showSlide(index) {
        slides.removeClass("active-slide").eq(index).addClass("active-slide");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (slides.length - 1);
        //alert(slides.length);
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, slideInterval);

    $(".nav-button-left").click(function() {
        currentIndex = (currentIndex - 1 + (slides.length - 1)) % (slides.length - 1);
        showSlide(currentIndex);
    });

    $(".nav-button-right").click(function() {
        currentIndex = (currentIndex + 1) % (slides.length - 1);
        showSlide(currentIndex);
    });

    $(".btn-green").click(function() {
        showSlide(0);
    });
    $(".btn-blue").click(function() {
        showSlide(1);
    });
    $(".btn-purple").click(function() {
        showSlide(2);
    });
});