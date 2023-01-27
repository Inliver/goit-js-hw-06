// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector("#validation-input")
// console.log(inputEl)

inputEl.addEventListener("blur", (ev) => {

    const validEL = document.querySelector(".valid");
    const invalidEl = document.querySelector(".invalid")

    invalidEl?.classList.remove("invalid");
    validEL?.classList.remove("valid");
    

     ev.currentTarget.value.length === Number(ev.currentTarget.dataset.length)
     ? ev.currentTarget.classList.add("valid")
     : ev.currentTarget.classList.add("invalid")

})