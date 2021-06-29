const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const item = [];

ingredients.forEach(elem => {
    let listItem = document.createElement('li');
    listItem.textContent = elem;
    item.push(listItem);
    // console.log(listItem);
})
// console.dir(item)

const listRef = document.querySelector('ul#ingredients')
listRef.append(...item)

// const item1 = document.createElement('li')
// const item2 = document.createElement('li')
// const item3 = document.createElement('li')
// const item4 = document.createElement('li')
// const item5 = document.createElement('li')
// const item6 = document.createElement('li')

// item1.textContent = ingredients[0];
// item2.textContent = ingredients[1];
// item3.textContent = ingredients[2];
// item4.textContent = ingredients[3];
// item5.textContent = ingredients[4];
// item6.textContent = ingredients[5];

// listRef.appendChild(item1)
// listRef.appendChild(item2)
// listRef.appendChild(item3)
// listRef.appendChild(item4)
// listRef.appendChild(item5)
// listRef.appendChild(item6) 