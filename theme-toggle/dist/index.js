"use strict";
const btn = document.querySelector('button');
function darkMode() {
    const switchMode = document.body;
    switchMode.classList.toggle('dark-mode');
}
btn.addEventListener('click', () => darkMode());
