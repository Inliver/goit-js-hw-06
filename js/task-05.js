// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");


inputEl.addEventListener('input', (evt) => {
      evt.currentTarget.value !== ''
        ? outputEl.textContent = evt.currentTarget.value
        : outputEl.textContent = "Anonymous";

})


// inputEl.addEventListener('input', onInputChange)

// function onInputChange (evt) {
    
//     evt.currentTarget.value === ''
//         ? (outputEl.textContent = "Anonymous")
//         : (outputEl.textContent = evt.currentTarget.value);

//     console.log (evt.currentTarget.value)

// }
