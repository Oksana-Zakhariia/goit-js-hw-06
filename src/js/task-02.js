const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlRef = document.getElementById("ingredients")
const elements = ingredients.map((ingredient) => {
const ingredientsLi = document.createElement("li")
ingredientsLi.textContent = ingredient;
ingredientsLi.classList.add("item")
return ingredientsLi
})
ingredientsUlRef.append(...elements);