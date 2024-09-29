let currentIndex = 0;//indexul la slaidul care ma aflu amu
let autoSlideInterval;//peremennaia pentru a salva intervalul de auto-schimbare
const slides = document.querySelectorAll('.slider-item');//primim toate elementele slaidului
const totalSlides = slides.length;//nr total de slaiduri

function showSlide(index) {
    const slideIndicator = document.querySelectorAll('input[name="slider"]');
    slideIndicator[index].checked = true;

    const offset = -index * 100;//schimbarea slaidului orizontal
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide(); // taimuru pentru auto schimbare zbrasivaetsa dac apas next slaid
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000); // schimb slaidul 5000 asta peste 5 sec
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// initial arat primu slaid 
showSlide(currentIndex);
startAutoSlide();//aici incepe zagruzca la auto slaid cind stranita am zapustito


