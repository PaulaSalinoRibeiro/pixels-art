
let colorPalette = document.getElementById('color-palette');

function createdColorPalette(color){
    let div = document.createElement('div');
    colorPalette.appendChild(div);
    div.className = 'color';
    div.classList.add('color');
    div.style.backgroundColor = color;
}

createdColorPalette('black');

function getRandomColor() {         // ref.: https://stackoverflow.com/questions/1484506/random-color-generator
    let letters = '0123456789ABCDEF'; 
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

createdColorPalette(getRandomColor());
createdColorPalette(getRandomColor());
createdColorPalette(getRandomColor());

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

 function createdPixelsBoard(num){
    for(let index = 0; index < num; index += 1){
        createdPixel(index);
     }  
}

createdPixelsBoard(25); 

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

let divButtons = document.getElementById('buttons');
let  input = document.createElement('input');
divButtons.appendChild(input);
input.type = 'number';
input.id = 'board-size';
input.min = '1';
input.max = '90';

let buttonVQV = document.createElement('button');
divButtons.appendChild(buttonVQV);
buttonVQV.id = 'generate-board';
buttonVQV.innerText = 'VQV';

 buttonVQV.addEventListener('click', newBoard);

 function newBoard(){

    let board = document.getElementById('pixel-board');
    let input = document.getElementById('board-size');

    if(input.value === ''){
        alert('Board inválido!');
    }

    if(input.value < 5){
        input.value = 5;
    } else if (input.value > 50){
        input.value = 50
    }

    let width = input.value*42.0;    
    board.style.width = width + 'px';

   let pixels = document.querySelectorAll('.pixel');
   for(let index = 0; index < pixels.length; index += 1){
       pixelBoard.removeChild(pixels[index]); 
   }

    num = input.value**2;
   createdPixelsBoard(num); 
}  


