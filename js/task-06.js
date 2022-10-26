const inputEl = document.querySelector('input')
console.log(inputEl);

inputEl.addEventListener('blur', onChangeBlur)
inputEl.classList.add('#validation-input')
function onChangeBlur() {
    // console.log(inputEl.value.length);
    // console.log(Number(inputEl.getAttribute("data-length")));
    if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}
console.log(inputEl.classList);