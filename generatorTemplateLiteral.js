// Объяснение:
// Шаблонная строка (Template Literal):

// Шаблонная строка начинается и заканчивается обратными кавычками (`).
// Внутри шаблонной строки можно использовать выражения, которые заключены в ${}. Эти выражения будут вычислены, и их значения будут вставлены в строку.
// В данном случае, выражение ${borderArr.join(' ')} используется для вставки результата метода join массива borderArr в строку.
// Метод .join(' '):

// Метод .join(' ') вызывается на массиве borderArr.
// Этот метод объединяет все элементы массива в одну строку, вставляя между ними пробелы (в данном случае, пробел указан в качестве аргумента).
// Например, если borderArr содержит значения [0, 0, 0, 0], то вызов borderArr.join(' ') вернёт строку "0 0 0 0".
// Формирование строки border-radius: ...:

// Шаблонная строка border-radius: ${borderArr.join(' ')} создаёт строку, где часть border-radius: остаётся неизменной, а часть ${borderArr.join(' ')} заменяется результатом вызова borderArr.join(' ').
// Если borderArr содержит значения [0, 0, 0, 0], то результат будет строкой "border-radius: 0 0 0 0".
// Вывод в консоль:

// console.log(borderRadius); выводит сформированную строку в консоль.
// Пример:
// Предположим, массив borderArr содержит значения [0, 0, 0, 0]. Тогда:

// borderArr.join(' ') вернёт строку "0 0 0 0".
// Шаблонная строка border-radius: ${borderArr.join(' ')} станет строкой "border-radius: 0 0 0 0".
// console.log(borderRadius); выведет "border-radius: 0 0 0 0" в консоль.
// Полный контекст:
// Если поместить этот код внутри функции, которая собирает значения из input элементов и вызывает console.log, то получится примерно так:

// javascript
// Копировать код
// function totalResult() {
//     let inputArr = Array.from(inputs).map(function(input) {
//         return input.value;
//     });

//     let inputValue = inputArr.join(' ');
//     inputsResult.textContent = inputValue;

//     let borderArr = Array.from(inputs).map(function(elem) {
//         return elem.value;
//     });

//     let borderRadius = `border-radius: ${borderArr.join(' ')}`;
//     console.log(borderRadius);
// }

// // Пример вызова функции при клике на кнопку
// btn.addEventListener("click", totalResult);
// В этом коде функция totalResult собирает значения из input элементов, формирует строку border-radius и выводит её в консоль при клике на кнопку.






