document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    document.querySelector('.next').addEventListener('click', function () {
        goToSlide(currentIndex + 1);
    });
    
    document.querySelector('.prev').addEventListener('click', function () {
        goToSlide(currentIndex - 1);
    });

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
        document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    goToSlide(currentIndex);
});
