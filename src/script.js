const textInput = document.querySelector('textarea');
const counter = document.querySelector('.count');


function handleCount(){
    const currentValue = textInput.value.length;
    counter.innerHTML = `Count : ${currentValue}`;
}

function init(){
    textInput.addEventListener('keyup', handleCount);
}

init();
