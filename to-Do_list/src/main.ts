let input = document.querySelector ("#input") as HTMLInputElement;
const form = document.querySelector ("#form-data") as HTMLElement;
const display = document.querySelector ("#display") as HTMLElement;
const list = document.querySelectorAll ("li");

function addData () {
    const li = document.createElement('li');

    let inputValue = input.value;
    const t: Text = document.createTextNode (inputValue)
    li.appendChild (t)
    if (inputValue === '') {
        alert ('Must add something...')
    }
    else {
        display.appendChild (li)
    }
    input.value = '';
    
}

form.addEventListener ('submit', (e) => {
    e.preventDefault ();
    addData ()
})