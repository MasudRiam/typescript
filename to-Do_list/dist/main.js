"use strict";
let input = document.querySelector("#input");
const form = document.querySelector("#form-data");
const display = document.querySelector("#display");
const list = document.querySelectorAll("li");
function addData() {
    const li = document.createElement('li');
    let inputValue = input.value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Must add something...');
    }
    else {
        display.appendChild(li);
    }
    input.value = '';
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addData();
});
