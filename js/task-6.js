const inputRef = document.querySelector('#validation-input');
// console.log(inputRef)

inputRef.addEventListener('blur', valided) 

function valided(event) {
    // console.log(event.target.value.length)
    // console.log(inputRef)
    event.target.value.length === 6
    ? inputRef.classList.remove('invalid') || inputRef.classList.add('valid')
    : inputRef.classList.remove('valid') || inputRef.classList.add('invalid');
}
