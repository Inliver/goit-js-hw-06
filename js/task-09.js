
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн 
// стиль при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl  = document.querySelector(".change-color")

btnEl.addEventListener("click", onBtnClick)


function onBtnClick() {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
  console.log(color)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


