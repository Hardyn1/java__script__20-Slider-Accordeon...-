// Inputs
const ranges = {
    tl:
    document.getElementById("tlr"),
    tr:
    document.getElementById("trr"),
    bl:
    document.getElementById("blr"),
    br:
    document.getElementById("brr"),
};

// let rangeTl = document.getElementById("tlr");
// let rangeTr = document.getElementById("trr");
// let rangeBl = document.getElementById("blr");
// let rangeBr = document.getElementById("brr");

// Inputs div
const results = {
    tl:
    document.getElementById("result-tlr"),
    tr:
    document.getElementById("result-trr"),
    bl:
    document.getElementById("result-blr"),
    br:
    document.getElementById("result-brr"),
};


// let resultTl = document.getElementById("result-tlr");
// let resultTr = document.getElementById("result-trr");
// let resultBl = document.getElementById("result-blr");
// let resultBr = document.getElementById("result-brr");

// Навесим обработчик событий сразу на все input,
// чтобы соединить с div result и выводить значения.
let inputs = document.querySelectorAll(".input");
let cube = document.getElementById("cube");
// Cube является главным в этой программе,
// на нем и будем изменять.

// Написать функцию которая будет изменять радиус.
// Надо связать значения div и range.
// Связали каждый range с результатом div.

// function changeRadius() {
//     resultTl.innerHTML = rangeTl.value;
//     resultTr.innerHTML = rangeTr.value;
//     resultBl.innerHTML = rangeBl.value;
//     resultBr.innerHTML = rangeBr.value;

//     cube.style.borderRadius = rangeTl.value + "px " + rangeTr.value + "px " + rangeBr.value + "px " + rangeBl.value + "px ";
//     // cube.style.borderRadius = `${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px`;

//     // updateInputsValueText();
// };

function changeRadius(){
    const radiusValues = [];
    for(const key in ranges){
        const value = ranges[key].value;
        results[key].textContent = value;
        radiusValues.push(`${value}px`);
    };
    cube.style.borderRadius = radiusValues.join(" ");
};


// Теперь надо чтобы каждый из углов соединялся с углами куба.

// Так как в querySelectorAll возвращается коллекция значений.
// То используем цикл for of.
for (let node of inputs) {
    // console.log(node); // В переменной node хранятся наши inputs.
    node.addEventListener("input", changeRadius); // Повесим событие input которое срабатывает на любое изменение.
    //В качестве 2 аргумента передаем функцию связанных значений.
    // Функция связывает результат и значение value.
};

/* 1.Взять CSS генератор который мы писали на уроке и добавить кнопку,
   при нажатии на которую мы будем выводить весь результат наших inputs в какой то div
   в виде стиля css соответствующий стилю border radius.
 */

let inputsResult = document.getElementById("inputs-result");
let btn = document.getElementById("button");

function totalResult() {
    let inputArr = Array.from(inputs).map(function(input){
        return input.value;
    });

    let inputValue = inputArr.join(' ');
    inputsResult.textContent = inputValue;

    let borderArr = Array.from(inputs).map(function(elem){
        return elem.value;
    });

    const borderRadius = `borderRadius: ${borderArr.join(" ")}`;
    console.log(borderRadius);
};



btn.addEventListener("click", totalResult);











// function updateInputsValueText() {
//     const values = Array.from(inputs)
//         .map(function(input) {
//             return input.value;
//         })
//         .join(' ');

//     inputsResult.textContent = values;
// }

// btn.addEventListener("click", updateInputsValueText);







