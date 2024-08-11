// 2. Взять SLIDER с урока, и добавить новый функционал, а именно:
// - при нажатии на точки снизу слайдера мы должны попадать на нужный нам слайд.
// Нажимаем на первую точку - мы на первом слайде
// Нажимаем на вторую точку - мы на втором слайде, и тд
// - активная точка должна закрашиваться цветом ( цвет на ваш выбор )
// - доработать слайдер так, чтобы после последнего слайда шел первый, и у нас начинался слайдер заново
// - когда мы дошли до первого слайда , сделать так , чтобы слайдер не останавливался а переходил на последний слайд
// вообщем слайдер должен работать циклично
/* 
    Событие DOMContentLoaded гарантирует, что DOM готов. Можно искать узлы по нему и не бояться, что что-то не догрузилось.
    Событие load дополнительно гарантирует, что все стили и картинки готовы.
    В этот момент размеры элементов на страницы посчитаны верно и доступны.
*/

// 1. Добавить авто смену слайдов
// 2. Сделать подсветку точек

// получи все слайды
// получи боди
// при нажатии на nextSlide получи индекс активного слайда
// поменяй индекс на следующий
// Сделай проверку, если индекс активного слайда равняется индексу последнего слайда, задай нулевой индекс

const slides = document.querySelectorAll(".slides img");
const body = document.querySelector("body");
const btnNx = document.getElementById("btn-next").addEventListener("click", nextSlide);
const btnPr = document.getElementById("btn-prev").addEventListener("click", prevSlide);



function nextSlide(){
    
    const actIndex = +body.getAttribute("slide");
    
    if(actIndex === slides.length - 1){
        body.setAttribute("slide", slides.length = 0);
    } else {
        body.setAttribute("slide", actIndex + 1);
    };


};

nextSlide();

function prevSlide(){
    
    const actIndex = +body.getAttribute("slide");

     if(actIndex === 0){
        body.setAttribute("slide", slides.length -1 );
    } else {
        body.setAttribute("slide", actIndex - 1);
    };

     
};

prevSlide();

const dots = document.querySelectorAll(".dot");
const dot = document.querySelector(".dot");
const dotColor = dot.getAttribute("clicked");

// dots.forEach(element => {
//     element.addEventListener("click", () => {
//         element.classList.add("clicked");  
//     });
// })


function changeSlideColor(){

dots.forEach((dot, index)=>{
dot.addEventListener("click", ()=>{
    dots.forEach(d =>{
        d.classList.remove("clicked");
    });
    document.body.setAttribute("slide", index);
    dot.classList.add("clicked");;
});

    

});

}

changeSlideColor();

let btnPrev = document.getElementById("btn-prev");

function prevInterval(){
    
    let sliderInterval = window.setInterval(nextSlide, 5000);
    
    let sliderPrInterval = btnPrev.addEventListener("click", ()=>{
        clearInterval(sliderInterval);
        sliderPrInterval = window.setInterval(prevSlide, 5000);
    });

};

prevInterval();

// Сделал автоматический перелист слайда, и при нажатии на кнопку слева перелист меняет направление назад.