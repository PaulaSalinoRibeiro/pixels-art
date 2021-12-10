
let colorPalette = document.getElementById('color-palette');

function createdColorPalette(color){
    let div = document.createElement('div');
    colorPalette.appendChild(div);
    div.className = 'color';
    div.classList.add('color');
    div.style.backgroundColor = color;
}

createdColorPalette('black');
createdColorPalette('purple');
createdColorPalette('red');
createdColorPalette('green');

colorPalette.firstChild.className = 'color selected'

let container = document.getElementById('container');
let pixelBoard = document.createElement('div');
container.appendChild(pixelBoard);
pixelBoard.id = 'pixel-board';

function createdPixel(){
    let div = document.createElement('div');
    pixelBoard.appendChild(div);
    div.className = 'pixel';
}

function createdPixelsColuns(num){
    for(let index = 0; index < num; index +=1){
        createdPixel();
    }
}

 for(let index = 0; index < 5; index += 1){
    createdPixelsColuns(5);
}  


let selectColorBlack = document.querySelector('.selected');
localStorage.setItem('selectColor', 'black');

colorPalette.addEventListener('click', changeSelected);
function changeSelected(event){
    let color = document.querySelectorAll('.color');
    for(let index = 0; index < color.length; index += 1){
        if(color[index].className === 'color selected'){
            color[index].className = 'color'
        }
    }
    event.target.className = 'color selected'
}

let pixelsBoard = document.querySelector('#pixel-board');
pixelsBoard.addEventListener('click', fillColorSelected);

function fillColorSelected(event){
    let setColor = document.querySelector('.selected');
    let color = setColor.style.backgroundColor;
    event.target.style.backgroundColor = color;
    
}

let btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearBoard);

function clearBoard(){
    let pixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)'
    }
}



