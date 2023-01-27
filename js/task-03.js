const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryEl = document.querySelector(".gallery");
galeryEl.style = "display: flex; padding: 0px; ";

let galery = [];

images.forEach(({ url, alt }) => {
  const listEl = document.createElement("li")
  listEl.style = "display: flex; padding: 5px; background-color: violet";
  const imageEl = document.createElement("img");
  imageEl.src = url;
  imageEl.alt = alt;
  imageEl.width = 300;
  listEl.appendChild(imageEl)
  galery.push(listEl)
})

galeryEl.append(...galery)




 const secondEl = images.map(({ url, alt }) => {
 const listEl2 = `<li style="display: flex; padding: 5px; background-color: tomato;">
  <img src="${url}" alt="${alt}" width = "300px" />
</li>`
   return listEl2;
 })

 galeryEl.insertAdjacentHTML('beforeEnd', secondEl.join(''))

console.log(secondEl)

// Используй массив объектов images для создания 
// элементов < img > вложенных в < li >.Для создания разметки используй 
// шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.