const firstButton = document.querySelector('#btn');
const textInput = document.querySelector('#text');
const rangeInput = document.querySelector('#range');
const square = document.querySelector('#square');
const gmyakBtn = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');
gmyakBtn.style.display = 'none';


const changeColor = function () {
    square.style.backgroundColor = textInput.value;
    
}

const changeSize = function () {
    circle.style.width = rangeInput.value + '%';
    circle.style.height = rangeInput.value + '%';
    
}

firstButton.addEventListener('click', changeColor);
rangeInput.addEventListener('input', changeSize);