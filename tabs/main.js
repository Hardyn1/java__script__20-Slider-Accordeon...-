let tabs = document.getElementById("tabs"),
    content = document.querySelectorAll(".content");
// ЕСЛИ HTML КОЛЛЕКЦИЯ ТО ЛУЧШЕ ПРОБЕГАТЬ ЦИКЛОМ FOR OF.
function changeClass(el) {
    // console.log(tabs.children);Выводит коллекцию и можно применить цикл for.
    for(let i = 0; i < tabs.children.length; i ++) {
        tabs.children[i].classList.remove("active"); //classList псевдомассив через метод remove можно удалить класс.
        // При помощи цикла мы удалили у всех класс active.
    };
    console.log(el); // <div class="tab-btn active" data-btn="2">2</div>
    el.classList.add("active");
     // Сначала у всех класс active сняли, затем добавили.
};
tabs.addEventListener("click", function(event){
    let currTab = event.target.dataset.btn; //event.target по какому элементу текущему произошел клик.
    // ДАТА АТРИБУТЫ СЛУЖАТ ЧТОБЫ СВЯЗАТЬ HTML / JAVASCRIPT.
    // console.log(event.target); Выводит текущее значение. <div class="tab-btn" data-btn="2">2</div>
    // console.log(currTab); 
    changeClass(event.target);
    // Теперь надо связать между собой data атрибуты.
    for(let a = 0; a < content.length; a++) { // CONTENT.LENGTH - ЭТО КОНЕЦ НАШЕЙ КОЛЛЕКЦИИ.
        content[a].classList.remove("active");
        if(content[a].dataset.content === currTab) { //ЛУЧШЕ ЧИТАТЬ КОД: ЕСЛИ В КОЛЛЕКЦИИ CONTENT[A] ЕСЛИ В DATASET.CONTENT РОВНЯЕТСЯ ТЕКУЩЕМУ TABS.
            content[a].classList.add("active");
        };
    };
});