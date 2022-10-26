 const inputEl = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")
inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length >=1) { return spanEl.textContent = event.currentTarget.value }
    else {return spanEl.textContent = "Anonymous"}
}
