const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
// console.dir(inputRef);
// console.dir(spanRef);
// spanRef.style.fontSize = '50px';

function updateFontSize(event) {
    // console.log(event.target.value)
    spanRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener('click', updateFontSize);