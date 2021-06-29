const quantityCategories = document.querySelectorAll('ul#categories>li'); //.item
console.log(...quantityCategories);

console.log('В списке ' + quantityCategories.length + ' категории.');

quantityCategories.forEach(elem => console.log
    ('Категория: ' + elem.firstElementChild.textContent + '\n' +
    'Количество: ' + elem.lastElementChild.children.length))