let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Function to animate the service div when mouseover
function animateService(element) {
    element.style.transform = 'scale(1.05)';
    element.style.boxShadow = '0px 0px 25px rgba(255, 215, 0, 0.6)';
}

// Function to reset the service div back to normal when mouseout
function resetService(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '0px 0px 15px rgba(255, 215, 0, 0.3)';
}
