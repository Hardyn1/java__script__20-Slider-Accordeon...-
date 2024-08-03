//     // Функция для переключения активного слайда
//     // index тоесть значение какого то слайда
// function activeSlide(n){
//     // В slides хранятся все 3 слайда - img.
//     for(let slide of slides) {
//         // При клике будем убирать класс актив, и добавлять только к тому индекс которого будем получать извне.
//         slide.classList.remove("active");
//     };
//     slides[n].classList.add("active");
// };

// function nextSlide() {
//     // Изначально надо проверять наши индексы
//     // Если индекс равен последнему 31 строчка проверят
//     // То мы просто остаемся на той же строке
//     // -1 Потому что изначально счет начинаем с 0 и будет все время уходить назад
//     if(index == slides.length -1 ){
//         index = slides.length - 1;
//         // Если находимся не на последнем то будем увеличивать индекс на 1 и нас слайд будет переключаться дальше
//     } else {
//         index ++;
//         activeSlide[n];
//     };
// };

// function prevSlide() {
//     if(index == 0) {
//         index = 0; // Приравнием к 0
//     } else {
//         index ++;
//         activeSlide[n]; // 1 функция для 2 противоположных функций
//     };
// };

// next.addEventListener("click", nextSlide);
// prev.addEventListener("click", prevSlide);
