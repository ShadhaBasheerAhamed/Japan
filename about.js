document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".about-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)
    
    // Show the first slide initially
    showSlide(currentSlide);
});
