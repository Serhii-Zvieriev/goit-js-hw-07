const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');
let counterValue = parseInt(counterValueRef.textContent);

// console.log(btnDecrementRef);
// console.log(btnIncrementRef);
// console.log(counterValueRef);
// console.log(Number.isInteger(counterValue));

const decrement = () =>  counterValueRef.textContent=counterValue-=1;
const increment = () => counterValueRef.textContent =counterValue+=1;

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);