

// Defined preference initial with color black;
let pixelBlack = document.querySelector('.selected')
localStorage.setItem('bgPixelBlack', 'black');
let bgPixelBlack = localStorage.getItem('bgPixelBlack');
pixelBlack.style.backgroundColor = bgPixelBlack;

// Choose color 

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

