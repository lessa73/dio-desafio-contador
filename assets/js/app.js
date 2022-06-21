var currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

increment.addEventListener("click", () => {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

decrement.addEventListener("click", () =>{
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

reset.addEventListener("click", () => {
    currentNumber = currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
})