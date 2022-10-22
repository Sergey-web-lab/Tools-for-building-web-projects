/* 1. Реализуйте сборку приложения с таймером из прошлого урока, используя webpack.
2. Настройте загрузку различных ресурсов, в том числе музыкальных файлов.
3. Оптимизируйте сборку, убедитесь, что в итоговый бандл не попадает неиспользуемый код..
*/

// ____________________________________________________________________

// Решение:

// 1) Реализовал сборку приложения с таймером из прошлого урока, используя webpack.
// 2. Настроил загрузку различных ресурсов, в том числе музыкальных файлов.
// 3. Оптимизировал через сжатие муз файл. С оптимизацией сборки возникли проблемы, не знаю какие файлы можно упразднить... 


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

