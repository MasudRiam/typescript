const btn = document.querySelector ('button') as HTMLElement;


function darkMode () {
    const switchMode = document.body;
    switchMode.classList.toggle ('dark-mode')
}

btn.addEventListener ('click', () => darkMode ())

