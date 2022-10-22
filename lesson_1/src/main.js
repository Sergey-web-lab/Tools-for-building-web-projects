/* Практическое задание
1. Реализуйте таймер. Включите в него общую кодовую базу с калькулятором дат,
реализованным в этом уроке. Вложите его в тот же index.html, что и калькулятор дат,
реализовав код переключения между разделами страницы.
a. Вынесите код переключения между разделами (таймер/калькулятор дат) в отдельный
модуль.
b. Вынесите общие функции обоих разделов в отдельный модуль.
c. Включите в таймер поле для установки времени и кнопки «Старт», «Стоп».
d. Для обновления времени на странице используйте setInterval().
e. Добавьте звуковое сопровождение, когда время заканчивается. Для работы со звуком
воспользуйтесь сторонней библиотекой, например, Howler.js.
f. Не используйте другие сторонние библиотеки. */

// ____________________________________________________________________

// Решение:

// 1) В файле timer.js реализовал таймер. Включил его в общую кдовоую базу, экспортировав в main.js.
// с) Включил в таймер поле для установки времени и кнопки «Старт», «Стоп».
// d) Для обновления времени на странице использовал setInterval().
// e) Добавил звуковое сопровождение, когда время таймера заканчивается.


import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { app } from "./timer.js";
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимозаполнить оба поля"); // 5
}

