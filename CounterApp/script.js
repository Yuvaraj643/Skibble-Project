const counter = document.querySelector(".counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");
const decrementButton =document.getElementById("decrement")

let count = 0;

incrementButton.addEventListener("click", () => {
	count++;
	counter.textContent = count;
});

resetButton.addEventListener("click", () => {
	count = 0;
	counter.textContent = count;
});

decrementButton.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });