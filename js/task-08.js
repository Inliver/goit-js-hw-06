// Напиши скрипт управления формой логина.
// 1 Обработка отправки формы form.login-form должна быть по событию submit.
// 2 При отправке формы страница не должна перезагружаться.
// 3 Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// 4 Если пользователь заполнил все поля и отправил форму, собери значения полей в
// обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// 5 Выведи обьект с введенными данными в консоль и очисти значения полей формы 
// методом reset.

const form = document.querySelector(".login-form")

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();
    
    const formData = {}

    // const formData = new FormData(e.currentTarget);
    if (e.currentTarget.elements.email.value === '') {
        window.alert("Поле пошта є обов'язковим")
        return;
    } else if (e.currentTarget.elements.password.value === ''){
        window.alert("Поле пароль є обов'язковим");
        return;
    } else {
        formData.mail = e.currentTarget.elements.email.value;
        formData.pass = e.currentTarget.elements.password.value;
     }

    console.log(formData)
    window.alert("Вхід підтвердженно")
    e.currentTarget.reset()
}
console.log(form)