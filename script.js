
// Defined preference initial with color black;

let pixelBlack = document.querySelector('.selected')
localStorage.setItem('bgPixelBlack', 'black');
let bgPixelBlack = localStorage.getItem('bgPixelBlack');
pixelBlack.style.backgroundColor = bgPixelBlack;

// Choose color;

let chooseColor = document.querySelector('#color-palette');
chooseColor.addEventListener('click', pickColor);
function pickColor(event){
    let color = document.querySelectorAll('.color');
    for(let index = 0; index < color.length; index += 1){
        if(color[index].className === 'color selected'){
            color[index].className = 'color'
        }
    }
    event.target.className = 'color selected'
} 

// Fill board 

    let board = document.querySelector('#pixel-board');   
    board.addEventListener('click', fillColor);

    let selectedColor = document.getElementById('color-palette');
    console.log(selectedColor)
    

    function fillColor(event){
        event.target.style.backgroundColor =  'black'
    }


// Resert board

let btn = document.createElement('button');
let sectionBtn = document.querySelector('#section-btn');
sectionBtn.appendChild(btn);
btn.id ='clear-board'
btn.innerText = 'Limpar'

btn.addEventListener('click', resertBoard);

function resertBoard(){
    let board = document.getElementsByClassName('pixel');
     for(let index = 0; index < board.length; index += 1){
        board[index].style.backgroundColor = 'rgb(255, 255, 255)'   
    } 
}


