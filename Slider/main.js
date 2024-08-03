// 2. Взять SLIDER с урока, и добавить новый функционал, а именно:
// - при нажатии на точки снизу слайдера мы должны попадать на нужный нам слайд.
// Нажимаем на первую точку - мы на первом слайде
// Нажимаем на вторую точку - мы на втором слайде, и тд
// - активная точка должна закрашиваться цветом ( цвет на ваш выбор )
// - доработать слайдер так, чтобы после последнего слайда шел первый, и у нас начинался слайдер заново
// - когда мы дошли до первого слайда , сделать так , чтобы слайдер не останавливался а переходил на последний слайд
// вообщем слайдер должен работать циклично

const slides = document.querySelectorAll(".slides img"); // все img элементы в slides
let slideIndex = 0; // текущее значение
let intervalId = null; // Нету значение
/* 
    initializeSlider()
    Событие DOMContentLoaded гарантирует, что DOM готов. Можно искать узлы по нему и не бояться, что что-то не догрузилось.
    Событие load дополнительно гарантирует, что все стили и картинки готовы.
    В этот момент размеры элементов на страницы посчитаны верно и доступны.
*/


function initializeSlider(){
    
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    };
    
};

document.addEventListener("DOMcontentLoaded", initializeSlider);

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }  else {
        slideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

};

function prevSlide(){
    clearInterval(intervalId); // stops interval
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
};

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
};

const dots = document.querySelectorAll(".dot");
let dotIndex = 0;

function firstDotSlide(){

    if(dots[dotIndex] >= slides[slideIndex = 0]){
        dots[dotIndex] = showSlide(); 
    };

};


function secondDotSlide(){

    if(dots[dotIndex] >= slides[slideIndex = 1]){
        dots[dotIndex] = showSlide();
    };
     
};

function thirdDotSlide(){

    if(dots[dotIndex] >= slides[slideIndex = 2]) {
        dots[dotIndex] = showSlide();
    };

};

function changeDotColor(){

    dots.forEach(dott =>{
     dott.addEventListener("click",() => {
        dots.forEach(d =>d.classList.remove("clicked"));
        dott.classList.add("clicked");
        dott.classList.remove("gray");
    });
    
});

};

changeDotColor();
