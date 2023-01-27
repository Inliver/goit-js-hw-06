// Создай переменную counterValue в которой будет
// храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const counterValueEL = document.getElementById("value");
let counterValue = 0;


const counterEl = document.querySelector('#counter')
 counterEl.addEventListener('click', onCounterClick )
 console.log(counterEl)

function onCounterClick(evn) {
    if (evn.target.nodeName !== 'BUTTON') {
        return;
    }
 
    // if (evn.target.dataset.action === "decrement") {
    //     counterValue -= 1;
    // } else {
    //     counterValue += 1;
    // }

    evn.target.dataset.action === "decrement" ? counterValue -= 1 : counterValue += 1;

    counterValueEL.textContent = counterValue
}



