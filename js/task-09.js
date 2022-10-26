function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

buttonEl.addEventListener('click', onButtonClick)
function onButtonClick() {
  const color = getRandomHexColor()
  document.querySelector('body').style.backgroundColor = color;
  spanEl.textContent = color
}