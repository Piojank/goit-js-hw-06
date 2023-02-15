const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientList = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");

list.insertAdjacentHTML("beforeend", ingredientList);