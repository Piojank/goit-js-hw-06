const queryAll = (selector) => document.querySelectorAll(selector);

const categories = queryAll("li.item");

console.log(`Number of categories: ${categories.length}`);

const message = categories.forEach((category) => {
    console.log(`Category: ${category.children[0].textContent}`);
    console.log(`Elements: ${category.children[1].children.length}`);
});