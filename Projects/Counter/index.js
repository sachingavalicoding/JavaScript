let counter = 0;
const count = document.getElementById('count');
const add = () => {
counter = counter + 1;
count.textContent = counter;
}
const minus = () => {
counter = counter - 1;
count.textContent = counter;
}

const reset = () =>{
    counter = 0;
    count.textContent = counter;
}