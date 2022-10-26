const counter = {
    value: 0,
    increment() { this.value += 1 },
    decrement() { this.value -= 1 },
};

const inctementButtonEl = document.querySelectorAll('button')[1];
const decremenButtonEl = document.querySelectorAll('button')[0];
const valueEl = document.querySelector('span');

 
inctementButtonEl.addEventListener('click', function () {
    counter.increment()
    valueEl.textContent = counter.value
});
decremenButtonEl.addEventListener('click', function () {
    counter.decrement()
    valueEl.textContent = counter.value
});