const inputRef = document.querySelector('input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');
let inputValue;

boxRef.style.display = 'flex';

// console.log(inputRef);
// console.log(renderBtnRef);
// console.log(destroyBtnRef);

//=========== Функция создания <div> =======
function createBoxes(amount) {
    amount = parseInt(inputRef.value);
    // console.log('amount= ', amount);
    const box = [];
    let w = 0;
    let h = 0;
    
    amount > 10 ? amount = 10 : amount;

    for (let i = 0; i < amount; i += 1) {
         w += 10;
         h += 10;

        box[i] = document.createElement('div');
        box[i].style.backgroundColor = getRandomColor();
        box[i].style.height = `${w}px`;
        box[i].style.width = `${h}px`;
        box[i].style.margin = '20px';
    }

    console.log('box: ' , box);
    boxRef.append(...box);
}

//=========== Функция удаления <div> =======
function destroyBoxes() {
    while (boxRef.firstChild) {
        boxRef.removeChild(boxRef.firstChild)
    }
}

//=========== Функция рандомного цвета =======
function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
