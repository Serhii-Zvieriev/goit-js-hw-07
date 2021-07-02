const inputRef = document.querySelector('#name-input');
const spanRef=document.querySelector('#name-output');

const updateValue = event => {
    event.target.value === ''
        ? spanRef.textContent = 'незнакомец'
        : spanRef.textContent = event.target.value;
}

inputRef.addEventListener('input', updateValue);



// const inputRef = document.querySelector('#name-input');
// const nameLabelRef = document.querySelector('#name-output');
// inputRef.addEventListener('input', event => {
//   event.target.value === ''
//     ? (nameLabelRef.textContent = 'незнакомец1')
//     : (nameLabelRef.textContent = event.target.value);
// })