const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingrediedtsEl = document.querySelector("ul")

const list = ingredients.map(ingridient => {
   const liEl = document.createElement("li");
  liEl.textContent = ingridient;
  liEl.classList = 'index';
 
  return liEl;
})

ingrediedtsEl.append(...list)
console.log(list)

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.