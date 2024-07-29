let prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");

let index = 0;

// Функция переключения слайда.
function activeSlide(n){
    for(let slide of slides) {
        // При клике убираем класс актив
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
};


// Переключает след, слайд.
function nextSlide() {
    // Строка проверят является ли мы на последнем слайде или нет.
    if(index == slides.length - 1) {
        index = slides.length - 1; // Остаемся на этом же слайде
    } else {
        index ++;
        activeSlide(index);
    };
};

function prevSlide() {
    if(index == 0) {
        index = 0;
    } else {
        index --;
        activeSlide(index);
    };
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
